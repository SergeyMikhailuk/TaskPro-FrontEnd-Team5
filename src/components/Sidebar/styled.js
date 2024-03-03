import styled from 'styled-components';

import { ReactComponent as AppLogoSvg } from 'images/sidebar/logo-icon.svg';
import { ReactComponent as AppBtnSvg } from 'images/sidebar/add-btn.svg';
import { ReactComponent as AppHelpsBtnSvg } from 'images/sidebar/help-icon.svg';
import { ReactComponent as AppLogOutBtnSvg } from 'images/sidebar/log-out-icon.svg';

export const Aside = styled.aside`
  width: 225px;
  padding: 14px;
  background-color: #121212;

  @media screen and (min-width: 768px) {
    width: 260px;
    padding: 24px;
  }
`;

export const LogoBox = styled.div`
  margin-bottom: 70px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const AppLogo = styled(AppLogoSvg)`
  width: 32px;
  height: 32px;
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    margin-right: 4px;
  }
`;

export const LogoBoxTitle = styled.h2`
  color: #fff;
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
  color: rgba(255, 255, 255, 0.5);
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
  color: #fff;
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
  background-color: #bedbb0;
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
    background-color: #bedbb0;
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
  background-color: #1f1f1f;
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
  color: #fff;
  margin-top: 14px;
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 143%;
  }
`;

export const BoxHelpsSelectedText = styled.span`
  color: #bedbb0;
`;

export const BoxHelpsBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
`;

export const BoxHelpsBtnIcon = styled(AppHelpsBtnSvg)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export const BoxHelpsBtnText = styled.p`
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.32px;
  color: #fff;
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
`;

export const LogOutIcon = styled(AppLogOutBtnSvg)`
  width: 32px;
  height: 32px;
  margin-right: 14px;
`;

export const LogOutText = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #fff;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;
