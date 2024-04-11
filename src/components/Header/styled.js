import styled from 'styled-components';

import { ReactComponent as BurgerImage } from 'images/svg/menu.svg';
import { ReactComponent as DownImage } from 'images/svg/down.svg';

export const Down = styled(DownImage)`
  color: ${props => props.theme.themePopup.textMain};
  width: 16px;
  height: 16px;
`;

export const Burger = styled(BurgerImage)`
  width: 24px;
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

export const ButtonMenu = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  display: flex;
`;

export const StyledSelectWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 150ms linear;
  &:hover svg {
    transform: scale(1.3);
  }
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
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  transform: translateY(${({ $isOpen }) => ($isOpen ? '70px' : '-150px')});
  transition-property: opacity, transform;
  transition:
    opacity 0.25s,
    transform 0.25s;
  display: inline-flex;
  padding: 18px 44px 18px 18px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.themePopup.border};
  background-color: ${props => props.theme.themePopup.background};
  gap: 4px;
  z-index: 100;
`;

export const StyledItem = styled.li`
  cursor: pointer;
  color: ${props => props.theme.themePopup.textSecondary};
  transition: all 150ms linear;
  &:hover {
    color: ${props => props.theme.themePopup.strokeBell};
    transform: scale(1.1);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const UserName = styled.span`
  color: ${props => props.theme.header.userName};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
`;

export const UserAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  cursor: pointer;
  object-fit: cover;

  transition: all 250ms linear;

  &:hover {
    transform: scale(1.1);
  }
`;
