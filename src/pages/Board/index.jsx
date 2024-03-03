import { Title, TestIcon } from './styled';
import testImg from 'images/2.png';
const BoardPage = () => {
  return (
    <>
      <Title>Board Page</Title>

      <img src={testImg} alt="" />
      <TestIcon />
      <p>test</p>
    </>
  );
};

export default BoardPage;
