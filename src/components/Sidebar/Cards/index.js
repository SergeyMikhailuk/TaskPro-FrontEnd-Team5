import React, { useState } from 'react';
import ModalEdit from '../../ModalWindows/ModalEdit/index';

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
} from './styled';

const Cards = ({ cards, deleteCard }) => {
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);

  const openModalEdit = () => {
    setIsModalOpenEdit(true);
  };

  return (
    <CardsBoardList>
      <CardsBoardListBox>
        <CardsBoardListTitle>
          <CardsBoardListIcon>{cards.icon}</CardsBoardListIcon>
          {cards.title}
        </CardsBoardListTitle>
        <CardsBoardListBtnGroup>
          <CardsBoardListEditBtn onClick={openModalEdit}>
            <CardsBoardListBtnEdit></CardsBoardListBtnEdit>
          </CardsBoardListEditBtn>
          {
            <ModalEdit
              isOpen={isModalOpenEdit}
              closeModal={() => setIsModalOpenEdit(false)}
            />
          }
          <CardsBoardListDeleteBtn>
            <CardsBoardListBtnDelete
              onClick={() => deleteCard(cards.id)}
            ></CardsBoardListBtnDelete>
          </CardsBoardListDeleteBtn>
        </CardsBoardListBtnGroup>
      </CardsBoardListBox>
    </CardsBoardList>
  );
};

export default Cards;
