import styled from 'styled-components';
import { ReactComponent as TestSVG } from 'images/logo-violet.svg';

import { colors } from 'constants/colors';

export const Title = styled.h1`
  color: ${colors.green};
  font-size: 50px;
`;
export const TestIcon = styled(TestSVG)`
  width: 30px;
  height: 20px;
`;

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

  li {
  }
  h2 {
    font-size: 14px;
    color: #ffffff;
  }
  a {
    background-color: #ffffff;
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
  h2 {
    font-size: 14px;
    color: #ffffff;
  }
`;
