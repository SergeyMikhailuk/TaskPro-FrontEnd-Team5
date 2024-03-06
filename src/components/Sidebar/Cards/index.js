import {
  CardsBoardList,
  CardsBoardListTitle,
  CardsBoardListIcon,
  CardsBoardListBtnGroup,
  CardsBoardListEditBtn,
  CardsBoardListDeleteBtn,
} from './styled';

const Cards = ({ cards, deleteCard }) => {
  console.log(cards.icon);
  return (
    <CardsBoardList>
      <CardsBoardListTitle>
        <CardsBoardListIcon>{cards.icon}</CardsBoardListIcon>
        {cards.title}
      </CardsBoardListTitle>
      <CardsBoardListBtnGroup>
        <CardsBoardListEditBtn></CardsBoardListEditBtn>
        <CardsBoardListDeleteBtn
          onClick={() => deleteCard(cards.id)}
        ></CardsBoardListDeleteBtn>
      </CardsBoardListBtnGroup>
    </CardsBoardList>
  );
};

export default Cards;
