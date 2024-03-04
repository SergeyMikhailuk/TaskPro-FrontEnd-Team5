import styled from 'styled-components';

import { ReactComponent as BurgerImage } from './menu.svg';
import { ReactComponent as DownImage } from './down.svg';


export const Down = styled(DownImage)`
  color: ${props => props.theme.themePopup.textMain};
  width: 16px;
  height: 16px;
`;



export const Burger = styled(BurgerImage)`
  width: 24px ;
  height: 24px;
  color: ${props => props.theme.header.menuIcon};
  

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const AppHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  background-color: ${props => props.theme.header.background};

  @media screen and (min-width: 768px) {
    padding: 18px 32px;
  }
  @media screen and (min-width: 1440px) {
    justify-content: flex-end;
    padding: 18px 24px;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  p {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: ${props => props.theme.header.userName};
  }
`;

export const Image = styled.div`
  svg {
    width: 32px;
    height: 32px;
    stroke: white;
  }
`;

export const ButtonMenu = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  display: flex;
`;

export const ButtonProfile = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;

  img {
    width: 32px;
  }
`;

export const StyledSelectWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;
export const StyledTitle = styled.p`
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: ${props => props.theme.themePopup.textMain};
`;

export const StyledList = styled.ul`

position: absolute;
opacity: ${(props) => (props.isOpen ? '1' : '0')};
transform: translateY(${(props) => (props.isOpen ? '70px' : '-150px')});
transition-property: opacity, transform;
transition: opacity 0.25s, transform 0.25s;
display: inline-flex;
padding: 18px 44px 18px 18px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
border-radius: 8px;
border: 1px solid ${props => props.theme.themePopup.border};
background-color: ${props => props.theme.themePopup.background};
gap: 4px;
`;

export const StyledItem = styled.li`
  cursor: pointer;
  color: ${props => props.theme.themePopup.textSecondary};
  transition: color 0.25s;
  &:hover {
    color: ${props => props.theme.themePopup.strokeBell};
  }
`;