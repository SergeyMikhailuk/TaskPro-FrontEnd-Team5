import { useSelector } from 'react-redux';
import { useGetBoardsQuery } from 'store/boardsSlice';
import { selectIsLoading } from 'store/auth/authSelectors';

import { HomeWrapper, HomeWrapperBoard } from './styled';

import BeforeStart from 'components/BeforeStart';
import Loader from 'components/Loader/Loader';
import MainPart from 'components/MainPart/MainPart';

const HomePage = () => {
  const { data: boards } = useGetBoardsQuery();
  const isLoading = useSelector(selectIsLoading);

  return isLoading ? (
    <Loader />
  ) : boards.length > 0 ? (
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
