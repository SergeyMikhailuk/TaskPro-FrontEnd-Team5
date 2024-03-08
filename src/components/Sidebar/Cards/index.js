import {
  CardsBoardList,
  CardsBoardListBox,
  CardsBoardListTitle,
  CardsBoardListIcon,
  CardsBoardListBtnGroup,
  CardsBoardListEditBtn,
  CardsBoardListBtnEdit,
  CardsBoardListDeleteBtn,
  CardsBoardListBtnDelete,
  CardsBoardListLine,
} from './styled';

const Cards = ({ cards, deleteCard }) => {
  return (
    <CardsBoardList>
      <CardsBoardListBox>
        <CardsBoardListTitle>
          <CardsBoardListIcon>{cards.icon}</CardsBoardListIcon>
          {cards.title}
        </CardsBoardListTitle>
        <CardsBoardListBtnGroup>
          <CardsBoardListEditBtn>
            <CardsBoardListBtnEdit></CardsBoardListBtnEdit>
          </CardsBoardListEditBtn>
          <CardsBoardListDeleteBtn>
            <CardsBoardListBtnDelete
              onClick={() => deleteCard(cards.id)}
            ></CardsBoardListBtnDelete>
          </CardsBoardListDeleteBtn>
        </CardsBoardListBtnGroup>
      </CardsBoardListBox>
      <CardsBoardListLine />
    </CardsBoardList>
  );
};

export default Cards;
