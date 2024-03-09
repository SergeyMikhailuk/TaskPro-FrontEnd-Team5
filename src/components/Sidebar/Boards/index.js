import React, { useState } from 'react';
import ModalEdit from '../../ModalWindows/ColumnModals/ModalEditColumn/index';

import {
  BoardList,
  BoardListBox,
  BoardListTitle,
  BoardListIcon,
  BoardListBtnGroup,
  BoardListEditBtn,
  BoardListBtnEdit,
  BoardListDeleteBtn,
  BoardListBtnDelete,
} from './styled';

const Boards = ({ boards, deleteBoard }) => {
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);

  const openModalEdit = () => {
    setIsModalOpenEdit(true);
  };

  return (
    <BoardList>
      <BoardListBox>
        <BoardListTitle>
          <BoardListIcon>{cards.icon}</BoardListIcon>
          {cards.title}
        </BoardListTitle>
        <BoardListBtnGroup>
          <BoardListEditBtn onClick={openModalEdit}>
            <BoardListBtnEdit></BoardListBtnEdit>
          </BoardListEditBtn>
          {
            <ModalEdit
              isOpen={isModalOpenEdit}
              closeModal={() => setIsModalOpenEdit(false)}
            />
          }
          <BoardListDeleteBtn>
            <BoardListBtnDelete
              onClick={() => deleteBoard(cards.id)}
            ></BoardListBtnDelete>
          </BoardListDeleteBtn>
        </BoardListBtnGroup>
      </BoardListBox>
    </BoardList>
  );
};

export default Boards;
