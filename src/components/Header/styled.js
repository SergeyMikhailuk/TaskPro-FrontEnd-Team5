import styled from 'styled-components';
import ReactSelect from 'react-select';

import { ReactComponent as BurgerImage } from './menu.svg';

export const Burger = styled(BurgerImage)`
  width: 32px;
  height: 32px;
  stroke: white;
`;
export const Select = styled(ReactSelect)`
/* width: 68px; */

`;
export const AppHeader = styled.header`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 18px 24px;
  background-color: #161616;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  p {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: #fff;
  }
`;

export const Image = styled.div`
  svg {
    width: 32px;
    height: 32px;
    stroke: white;
  }
`;
