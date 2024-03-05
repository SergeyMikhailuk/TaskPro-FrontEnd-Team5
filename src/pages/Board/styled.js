import styled from 'styled-components';
// import { ReactComponent as TestSVG } from 'images/logo-violet.svg';

import { colors } from 'constants/colors';

export const Title = styled.h1`
  color: ${colors.green};
  font-size: 50px;
`;
export const Wrapper = styled.div``;
// export const TestIcon = styled(TestSVG)`
//   width: 30px;
//   height: 20px;
// `;
export const ColumnName = styled.ul`
  width: 334px;
  height: 56px;
  background-color: #121212;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  margin-left: 20px;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  letter-spacing: -0.02em;
  line-height: 21px;
  color: #ffffff;
`;
export const TitleWrapper = styled.div``;

export const TitleHeader = styled.h2`
  font-size: 14px;
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
export const Icon = styled.svg`
  width: 16px;
  height: 16px;
  /* stroke: ${props => props.theme.column.icon}; */
  fill: transparent;
  cursor: pointer;
  transition: all 250ms linear;

  &:hover {
    opacity: 0.4;
    transform: scale(1.4);
  }
`;
// export const HeaderList = styled.ul`
//   width: 334px;
//   height: 56px;
//   background-color: #121212;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding-left: 20px;
//   margin-left: 20px;
//   border-radius: 8px;
//   font-family: 'Poppins', sans-serif;
//   letter-spacing: -0.02em;
//   line-height: 21px;

//   color: #ffffff;

//   li {
//   }
//   h2 {
//     font-size: 14px;
//   }
//   a {
//   }
//   .svg-icon {
//     width: 16px;
//     height: 16px;
//     stroke: darkblue;
//     fill: #ffffff;
//     fill: transparent;
//     cursor: pointer;
//     transition: all 250ms linear;

//     &:hover {
//       opacity: 0.4;
//       transform: scale(1.4);
//     }
//   }
//   .head-container {
//     display: flex;
//   }
//   .icon-container {
//     display: flex;
//     gap: 8px;

//     padding-right: 12px;
//   }
// `;

// export const TaskCard = styled.ul`
//   width: 334px;
//   background-color: #121212;
//   margin-left: 20px;
//   margin-top: 20px;
//   h2 {
//     font-size: 14px;
//     color: #ffffff;
//   }

//   h2 {
//     padding-left: 24px;
//     padding-top: 14px;
//     font-weight: 600;
//     line-height: 21px;
//     letter-spacing: -0.02em;
//   }
//   .task-description {
//     font-weight: 400;
//     font-size: 12px;
//     line-height: 16px;
//     letter-spacing: -0.02em;
//     width: 290px;
//     color: #ffffff;
//     opacity: 50%;
//     padding-left: 24px;
//     padding-top: 17px;
//   }
//   .task-description::after {
//     content: '';
//     position: absolute;
//     width: 100%;
//     height: 1px;
//     top: 68%;
//     left: 305px;
//     /* border: 1px solid #ffffff; */
//     /* opacity: 10%; */
//     /* background-color: rgba(255, 255, 255, 0.1); */
//     background-color: red;
//   }
//   h3 {
//     color: #ffffff;
//     opacity: 50%;
//   }
//   .priority-color {
//     width: 12px;
//     height: 12px;
//     background-color: #8fa1d0;
//     border-radius: 50%;
//     font-weight: 400;
//     line-height: 16px;
//     letter-spacing: -0.02em;
//     font-size: 12px;
//   }
//   /* .line {
//     width: 290px;
//     border: 1px #ffffff;
//     opacity: 10%;
//   } */
//   .deadline {
//     color: #ffffff;
//   }
// `;
