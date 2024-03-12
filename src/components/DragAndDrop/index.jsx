import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Cards from '../Sidebar/Cards/index'; //указать путь к Компоненту карточек, т.е. что мы будем перетягивать

const DragAndDrop = ({ cards }) => {
  const [cardsDrag, setCardsDrag] = useState(cards);

  const moveCard = (dragIndex, hoverIndex) => {
    const draggedCard = cardsDrag[dragIndex];
    const updatedCards = [...cardsDrag];
    updatedCards.splice(dragIndex, 1);
    updatedCards.splice(hoverIndex, 0, draggedCard);
    console.log('moveCard:', updatedCards); // по этому консолю видно, как карточки перетаскиваются
    setCardsDrag(updatedCards);
  };

  const cardsList = cards.map((card, index) => (
    <Cards
      key={card.id}
      id={card.id}
      title={card.title}
      icon={card.icon}
      index={index}
      moveCard={moveCard}
    />
  ));

  return <DndProvider backend={HTML5Backend}>{cardsList}</DndProvider>;
};

export default DragAndDrop;

// ***** ФАЙЛ-КОМПОНЕНТ РОДИТЕЛЬСКОГО КОМПОНЕНТА ******
// код Drag для родительского компонента:

//import DragAndDrop from '../DragAndDrop/index';
//import { DndProvider } from 'react-dnd';
//import { HTML5Backend } from 'react-dnd-html5-backend';

//   return (
// <DndProvider backend={HTML5Backend}>
// <DragAndDrop cards={cards} />
// </DndProvider>
//   );

// ***** ФАЙЛ-КОМПОНЕНТ САМОЙ КАРТОЧКИ ******
// код Drag для карточек

// import { useState } from 'react';
// import { useDrag, useDrop } from 'react-dnd';
// useDrag - хук, позволяющий определить перетаскиваемый элемент
// useDrop - хук, позволяющий определить зону, в которую можно перетаскивать элементы

// const Cards = ({ id, title, icon, index, moveCard }) => {
//   const [, ref] = useDrag({
//     type: 'CARD', // Тип перетаскиваемой карточки
//     item: { id, index }, // Данные перетаскиваемой карточки
//   });

//   const [, drop] = useDrop({
//     accept: 'CARD',
//     hover: item => {
//       // Функция, вызываемая при наведении перетаскиваемой карточки на зону
//       if (item.index !== index) {
//         // Перемещение карточки при наведении на новое место
//         moveCard(item.index, index);
//         item.index = index;
//       }
//     },
//   });

// в return вещаем ref={node => ref(drop(node))} на li-ку компонент карточки
//   // ref - привязка к компоненту для передачи нашей карточки хуку useDrop

//   return (
//     <CardsBoardList ref={node => ref(drop(node))}>
//   --- СТРУКТУРА КАРТОЧКИ ---
//     </CardsBoardList>
//   );
// };
