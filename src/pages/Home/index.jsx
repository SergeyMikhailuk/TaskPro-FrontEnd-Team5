import { useDispatch, useSelector } from 'react-redux';
import { useGetBoardsQuery } from 'store/boardsSlice';
import { selectIsLoading } from 'store/auth/authSelectors';

import { HomeWrapper, HomeWrapperBoard } from './styled';

import BeforeStart from 'components/BeforeStart';
import Loader from 'components/Loader/Loader';
import MainPart from 'pages/Board';
import { setActiveBoardId } from '../../store/activeBoardSlice';
import { useEffect } from 'react';

const HomePage = () => {
  const dispatch = useDispatch();
  const { data: boards } = useGetBoardsQuery();
  const isLoading = useSelector(selectIsLoading);
  const activeBoardId = useSelector(state => state.activeBoardId);
  const firstBoardId = boards?.[0]?._id;

  useEffect(() => {
    if (!activeBoardId && firstBoardId) {
      dispatch(setActiveBoardId(firstBoardId));
    }
  }, [activeBoardId, firstBoardId, dispatch]);

  return isLoading ? (
    <Loader />
  ) : boards?.length > 0 ? (
    <HomeWrapperBoard>
      <MainPart />
    </HomeWrapperBoard>
  ) : (
    <HomeWrapper>
      <BeforeStart />
    </HomeWrapper>
  );
};

export default HomePage;
