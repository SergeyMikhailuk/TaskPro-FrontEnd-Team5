import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setActiveBoardId } from 'store/activeBoardSlice';

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

import EditBoardModal from '../../../components/ModalWindows/BoardModal/EditBoard/index.jsx';
import { ReactModal } from '../../ModalWindows/Modal/Modal';

const BoardItem = ({ board, deleteBoard }) => {
  const dispatch = useDispatch();
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
  };

  return (
    <BoardIt onClick={handleBoardClick}>
      <BoardListBox>
        <BoardListTitle>
          <BoardListIcon>{}</BoardListIcon>
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
          <EditBoardModal  closeModal={handleCloseBoardModal}/>
        </ReactModal>
      </BoardListBox>
    </BoardIt>
  );
};

export default BoardItem;
