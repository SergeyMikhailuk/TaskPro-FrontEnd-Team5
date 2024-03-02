import styled from 'styled-components';
import { colors } from 'constants/colors';

export const AppHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px;
  background-color: black;

  h2 {
    color: ${colors.green};
    font-family: 'Poppins', sans-serif;
  }
`;
