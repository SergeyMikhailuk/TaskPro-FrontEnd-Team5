import React, { useState } from 'react';
import ModalEdit from '../../ModalWindows/ColumnModals/ModalEditColumn/index';

import {
  BoardItem,
  BoardListBox,
  BoardListTitle,
  BoardListIcon,
  BoardListBtnGroup,
  BoardListEditBtn,
  BoardListBtnEdit,
  BoardListDeleteBtn,
  BoardListBtnDelete,
} from './styled';
import { useSelector } from 'react-redux';

const Board = ({ board, deleteBoard, updateBoardsList }) => {
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const token = useSelector(state => state.auth.token);

  const openModalEdit = () => {
    setIsModalOpenEdit(false);
  };

  const handleDeleteBoard = async () => {
    await deleteBoard(board.id, token);
    updateBoardsList();
  };

  return (
    <BoardItem>
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
              onClick={handleDeleteBoard}
            ></BoardListBtnDelete>
          </BoardListDeleteBtn>
        </BoardListBtnGroup>
      </BoardListBox>
    </BoardItem>
  );
};

export default Board;
