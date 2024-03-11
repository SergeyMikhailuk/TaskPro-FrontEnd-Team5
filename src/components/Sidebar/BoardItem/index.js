import React, { useState } from 'react';
import ModalEdit from '../../ModalWindows/ColumnModals/ModalEditColumn/index';

import {
  BoardIt,
  BoardListBox,
  BoardListTitle,
  BoardListIcon,
  BoardListBtnGroup,
  BoardListEditBtn,
  BoardListBtnEdit,
  BoardListDeleteBtn,
  BoardListBtnDelete,
} from './styled';

const BoardItem = ({ board, deleteBoard }) => {
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);

  const openModalEdit = () => {
    setIsModalOpenEdit(false);
  };

  const handleDelete = () => {
    deleteBoard(board._id);
  };

  return (
    <BoardIt>
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
            <BoardListBtnDelete onClick={handleDelete}></BoardListBtnDelete>
          </BoardListDeleteBtn>
        </BoardListBtnGroup>
      </BoardListBox>
    </BoardIt>
  );
};

export default BoardItem;
