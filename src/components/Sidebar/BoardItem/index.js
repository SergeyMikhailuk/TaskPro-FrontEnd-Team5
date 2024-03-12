import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getActiveBoardId, setActiveBoardId } from 'store/activeBoardSlice';

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

import EditBoardModal from '../../../components/ModalWindows/BoardModal/EditBoard/index.jsx'
import { ReactModal } from '../../ModalWindows/Modal/Modal';

const BoardItem = ({ board, deleteBoard }) => {
  const dispatch = useDispatch();
  const currentId = useSelector(getActiveBoardId);
  const handleDelete = () => {
    deleteBoard(board._id);
  };

  const handleBoardClick = () => {
    console.log('currentId: ', currentId);
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
          title="Add Column"
          closeModal={handleCloseBoardModal}
          onRequestClose={handleCloseBoardModal}
        >
          <EditBoardModal />
        </ReactModal>


      </BoardListBox>
    </BoardIt>
  );
};

export default BoardItem;
