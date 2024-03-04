import { Title, TestIcon, HeaderList, TaskCard } from './styled';
import testImg from 'images/2.png';

const BoardPage = () => {
  return (
    <>
      <Title>Board Page</Title>
      <HeaderList>
        <li>
          <div class="head-container">
            <h2>To Do</h2>
          </div>
        </li>
        <div class="icon-container">
          <li>
            <a href="">
              <svg width="16" height="16">
                <use xlinkHref="images/sprite.svg#icon-pencil"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="">
              <svg width="16" height="16">
                <use xlinkHref="images/sprite.svg#icon-trash"></use>
              </svg>
            </a>
          </li>
        </div>
      </HeaderList>
      <TaskCard>
        <li>
          <div>
            <h2>The Watch Spot Design</h2>
            <p>
              Create a visually stunning and eye-catching watch dial design that
              embodies our brand's essence of sleek aesthetics and modern
              elegance. Your design should be unique, innovative, and reflective
              of the latest trends in watch design.
            </p>
            <h3></h3>
            <div></div>
            <h3></h3>
            <p></p>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </li>
      </TaskCard>
      {/* <img src={testImg} alt="" /> */}
      {/* <TestIcon /> */}
    </>
  );
};

export default BoardPage;
