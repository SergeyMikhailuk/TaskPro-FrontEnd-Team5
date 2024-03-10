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

const Board = ({ board, deleteBoard }) => {
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);

  const openModalEdit = () => {
    setIsModalOpenEdit(false);
  };

  return (
    <BoardList>
      <BoardListBox>
        <BoardListTitle>
          <BoardListIcon>{}</BoardListIcon>
          {board.title}
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
              onClick={() => deleteBoard(board.id)}
            ></BoardListBtnDelete>
          </BoardListDeleteBtn>
        </BoardListBtnGroup>
      </BoardListBox>
    </BoardList>
  );
};

export default Board;
