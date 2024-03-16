import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';

import { setActiveBoardId } from 'store/activeBoardSlice';
import { ReactModal } from 'components/ModalWindows/Modal/Modal';
import BoardModal from 'components/ModalWindows/BoardModal';
import { Icon } from 'components/ModalWindows/BoardModal/styled';
import sprite from 'images/sprite.svg';

import {
  BoardLi,
  BoardListBox,
  BoardListTitle,
  BoardListBtnGroup,
  BoardListEditBtn,
  BoardListBtnEdit,
  BoardListDeleteBtn,
  BoardListBtnDelete,
} from './styled';

const BoardItem = ({ board, deleteBoard }) => {
  const dispatch = useDispatch();
  const activeBoardId = useSelector(state => state.activeBoardId);

  const handleDelete = () => {
    deleteBoard(board._id);
  };

  const handleBoardClick = () => {
    dispatch(setActiveBoardId(board._id));
  };

  const [isOpenBoardModal, setIsOpenBoardModal] = useState(false);

  const handleOpenBoardModal = () => {
    setIsOpenBoardModal(true);
  };

  const handleCloseBoardModal = () => {
    setIsOpenBoardModal(false);
    dispatch(setActiveBoardId(board._id));
  };

  return (
    <BoardLi onClick={handleBoardClick} $isActive={board._id === activeBoardId}>
      <BoardListBox>
        <BoardListTitle>
          <Icon width={18} height={18}>
            <use href={sprite + board?.iconURL} width={18} height={18} />
          </Icon>
          {board.title}
        </BoardListTitle>
        <BoardListBtnGroup>
          <BoardListEditBtn onClick={handleOpenBoardModal}>
            <BoardListBtnEdit></BoardListBtnEdit>
          </BoardListEditBtn>

          <BoardListDeleteBtn>
            <BoardListBtnDelete onClick={handleDelete}></BoardListBtnDelete>
          </BoardListDeleteBtn>
        </BoardListBtnGroup>

        <ReactModal
          isOpen={isOpenBoardModal}
          title="Edit board"
          closeModal={handleCloseBoardModal}
          onRequestClose={handleCloseBoardModal}
        >
          <BoardModal
            closeModal={handleCloseBoardModal}
            typeModal={'edit'}
            item={board}
          />
        </ReactModal>
      </BoardListBox>
    </BoardLi>
  );
};

export default BoardItem;
