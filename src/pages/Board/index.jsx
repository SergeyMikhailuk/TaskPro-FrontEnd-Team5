import { Title, HeaderList, TaskCard } from './styled';
// import testImg from 'images/2.png';

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
          <li class="svg-icon">
            <a href="">
              <svg width="16" height="16">
                <use xlinkHref="images/sprite.svg#icon-pencil"></use>
              </svg>
            </a>
          </li>
          <li class="svg-icon">
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
            <p class="task-description">
              Create a visually stunning and eye-catching watch dial design that
              embodies our brand's
            </p>
            <div class="line"></div>
            <h3>Priority</h3>
            <div class="priority-color"></div>
            <h3>Deadline</h3>
            <p class="deadline">12/05/2022</p>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </li>
      </TaskCard>
    </>
  );
};

export default BoardPage;
{
  /* <img src={testImg} alt="" /> */
}
{
  /* <TestIcon /> */
}
