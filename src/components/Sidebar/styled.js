import styled from 'styled-components';

import { ReactComponent as AppLogoSvg } from 'images/sidebar/logo-icon.svg';
import { ReactComponent as AppBtnSvg } from 'images/sidebar/add-btn.svg';
import { ReactComponent as AppHelpsBtnSvg } from 'images/sidebar/help-icon.svg';
import { ReactComponent as AppLogOutBtnSvg } from 'images/sidebar/log-out-icon.svg';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 90;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const Aside = styled.aside`
  display: flex;
  height: 100vh;
  flex-direction: column;
  width: 225px;
  background: ${props => props.theme.sidebar.background};
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transform: translateX(-100%);
  transition: transform 250ms ease-in;
  padding: 14px;

  &.open {
    transform: translateX(0);
  }

  @media screen and (min-width: 768px) {
    width: 260px;
    padding: 24px;
  }

  @media screen and (min-width: 1440px) {
    position: static;
    transform: translateX(0);
    transition: none;
    width: 310px;
  }
`;

export const LogoBox = styled.div`
  margin-bottom: 70px;
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 60px;
  }
`;

export const AppLogo = styled(AppLogoSvg)`
  width: 32px;
  height: 32px;

  & .first-name {
    color: ${props => props.theme.sidebar.iconLogoBackground};
  }
  & .second-name {
    color: ${props => props.theme.sidebar.iconLogoImage};
  }
`;

export const LogoBoxTitle = styled.h2`
  color: ${props => props.theme.sidebar.textMain};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.64px;
`;

export const AddBoards = styled.div`
  margin-bottom: 40px;
`;

export const AddBoardsTitle = styled.h3`
  font-weight: 400;
  font-size: 12px;
  color: ${props => props.theme.sidebar.textSecondary};
  letter-spacing: -0.32px;
  padding-bottom: 8px;
`;

export const AddBoardsCreateBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 197px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-top: solid 1px rgba(255, 255, 255, 0.5);
  border-bottom: solid 1px rgba(255, 255, 255, 0.5);

  @media screen and (min-width: 768px) {
    width: 212px;
  }
`;

export const AddBoardsCreateText = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: ${props => props.theme.sidebar.textMain};
  letter-spacing: -0.32px;
`;

export const AddBoardsCreateBtnWrap = styled.button`
  border: none;
  background-color: transparent;
`;

export const AddBoardsCreateBtn = styled(AppBtnSvg)`
  width: 40px;
  height: 36px;
  border-radius: 6px;
  & .plus-back {
    color: ${props => props.theme.sidebar.addButtonHover};

    &:hover {
      color: ${props => props.theme.sidebar.iconLogoutHover};
    }
  }
  & .plus {
    color: ${props => props.theme.sidebar.addButtonColor};
  }
`;

export const CardsBoard = styled.ul`
  height: 185px;
  overflow: auto;
  margin-bottom: 40px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.sidebar.scroll};
    border-radius: 5px;
  }
`;

export const CardsBoardList = styled.li`
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  letter-spacing: -0.32px;
  height: 61px;
  background-color: #1f1f1f;
  /* opacity: 0.4; */
  padding: 20px 24px 20px 24px;
  margin-bottom: 4px;
`;

export const BoxHelps = styled.div`
  width: 197px;
  border-radius: 8px;
  background-color: ${props => props.theme.needHelp.background};
  padding: 14px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 212px;
    padding: 20px;
  }
`;

export const BoxHelpsText = styled.p`
  font-size: 12px;
  line-height: 133%;
  letter-spacing: -0.32px;
  color: ${props => props.theme.needHelp.textMain};
  margin-top: 14px;
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 143%;
  }
`;

export const BoxHelpsSelectedText = styled.span`
  color: ${props => props.theme.themePopup.textAccent};
`;

export const BoxHelpsBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;

  &:hover {
    svg {
      color: ${props => props.theme.sidebar.iconLogoutHover};
    }
  }
`;

export const BoxHelpsBtnIcon = styled(AppHelpsBtnSvg)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  color: ${props => props.theme.needHelp.icon};
`;

export const BoxHelpsBtnText = styled.p`
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.32px;
  color: ${props => props.theme.needHelp.textMain};
`;

export const LogOut = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  color: #fff;
`;

export const LogOutIconBtnWrap = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;

  &:hover {
    svg {
      color: ${props => props.theme.sidebar.iconLogoutHover};
    }
  }
`;

export const LogOutIcon = styled(AppLogOutBtnSvg)`
  width: 32px;
  height: 32px;
  margin-right: 14px;
  color: ${props => props.theme.needHelp.icon};
`;

export const LogOutText = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: ${props => props.theme.needHelp.textMain};

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;
