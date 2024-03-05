import {
  Title,
  ColumnName,
  Wrapper,
  TitleWrapper,
  TitleHeader,
  IconWrapper,
  Icon,
} from './styled';
// import testImg from 'images/2.png';

const BoardPage = () => {
  return (
    <>
      <Title>Board Page</Title>
      <Wrapper>
        <ColumnName>
          <li>
            <TitleWrapper>
              <TitleHeader>To Do</TitleHeader>
            </TitleWrapper>
          </li>
          <li>
            <IconWrapper>
              <a href="/">
                <Icon>
                  <use xlinkHref="images/sprite.svg#icon-pencil"></use>
                </Icon>
              </a>
            </IconWrapper>
          </li>
        </ColumnName>
      </Wrapper>
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
// <HeaderList>
//       <li>
//         <div class="head-container">
//           <h2>To Do</h2>
//         </div>
//       </li>
//       <div class="icon-container">
//         <li class="svg-icon">
//           <a href="">
//             <svg>
//               <use xlinkHref="images/sprite.svg#icon-pencil"></use>
//             </svg>
//           </a>
//         </li>
//         <li class="svg-icon">
//           <a href="">
//             <svg>
//               <use xlinkHref="images/sprite.svg#icon-trash"></use>
//             </svg>
//           </a>
//         </li>
//       </div>
//     </HeaderList>

//     <TaskCard>
//       <li>
//         <div>
//           <h2>The Watch Spot Design</h2>
//           <p class="task-description">
//             Create a visually stunning and eye-catching watch dial design
//             that embodies our brand's
//           </p>
//           <div class="priority-wrapper">
//             <h3>Priority</h3>
//             <div class="priority-color"></div>
//           </div>
//           <div class="deadline-wrapper">
//             <h3>Deadline</h3>
//             <p class="deadline">12/05/2022</p>
//           </div>

//           <ul>
//             <li></li>
//             <li></li>
//             <li></li>
//           </ul>
//         </div>
//       </li>
//     </TaskCard>
