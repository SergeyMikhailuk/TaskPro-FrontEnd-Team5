import { useDispatch, useSelector } from 'react-redux';
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

  return (
    <BoardIt onClick={handleBoardClick}>
      <BoardListBox>
        <BoardListTitle>
          <BoardListIcon>{}</BoardListIcon>
          {board.title}
        </BoardListTitle>
        <BoardListBtnGroup>
          <BoardListEditBtn onClick={console.log}>
            <BoardListBtnEdit></BoardListBtnEdit>
          </BoardListEditBtn>

          <BoardListDeleteBtn>
            <BoardListBtnDelete onClick={handleDelete}></BoardListBtnDelete>
          </BoardListDeleteBtn>
        </BoardListBtnGroup>
      </BoardListBox>
    </BoardIt>
  );
};

export default BoardItem;
