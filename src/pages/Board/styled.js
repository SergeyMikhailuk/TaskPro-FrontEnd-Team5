import styled from 'styled-components';
// import { ReactComponent as TestSVG } from 'images/logo-violet.svg';

import { colors } from 'constants/colors';

export const Title = styled.h1`
  color: ${colors.green};
  font-size: 50px;
`;
// export const TestIcon = styled(TestSVG)`
//   width: 30px;
//   height: 20px;
// `;

export const HeaderList = styled.ul`
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

  li {
  }
  h2 {
    font-size: 14px;
  }
  a {
    display: block;
    width: 16px;
    height: 16px;
  }
  .svg-icon {
    background-color: #ffffff;
    opacity: 50%;
  }
  .head-container {
    display: flex;
  }
  .icon-container {
    display: flex;
    gap: 8px;

    padding-right: 12px;
  }
`;

export const TaskCard = styled.ul`
  width: 334px;
  background-color: #121212;
  margin-left: 20px;
  margin-top: 20px;
  h2 {
    font-size: 14px;
    color: #ffffff;
  }

  h2 {
    padding-left: 24px;
    padding-top: 14px;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: -0.02em;
  }
  .task-description {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.02em;
    width: 290px;
    color: #ffffff;
    opacity: 50%;
    padding-left: 24px;
    padding-top: 17px;
  }
  .task-description::after {
    content: '';
    position: absolute;
    width: 290px;
    top: 68%;
    left: 305px;
    border: 1px solid #ffffff;
    opacity: 10%;
  }
  h3 {
    color: #ffffff;
    opacity: 50%;
  }
  .priority-color {
    width: 12px;
    height: 12px;
    background-color: #8fa1d0;
    border-radius: 50%;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.02em;
    font-size: 12px;
  }
  /* .line {
    width: 290px;
    border: 1px #ffffff;
    opacity: 10%;
  } */
  .deadline {
    color: #ffffff;
  }
`;
