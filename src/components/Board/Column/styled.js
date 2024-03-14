import styled from 'styled-components';

import { ReactComponent as AppEditCardSvg } from 'images/sidebar/edit-card.svg';
import { ReactComponent as AppTrashCardSvg } from 'images/sidebar/trash-card.svg';
import { ReactComponent as AppBtnSvg } from 'images/svg/plus28.svg';

export const Wrapper = styled.div``;

export const ButtonEdit = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
export const ButtonDelete = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const AddCardCreateBtn = styled(AppBtnSvg)`
  width: 40px;
  height: 36px;
  border-radius: 6px;
  & .plus {
    color: ${props => props.theme.modal.plusColor};
  }

  & .backgr {
    color: ${props => props.theme.modal.buttonText};
  }
`;

export const CardstBtnEdit = styled(AppEditCardSvg)`
  width: 16px;
  height: 16px;
  color: ${props => props.theme.column.textSecondary};
  transition: all 250ms linear;

  &:hover {
    transform: scale(1.2);
  }
`;

export const CardsBtnDelete = styled(AppTrashCardSvg)`
  width: 16px;
  height: 16px;
  color: ${props => props.theme.column.textSecondary};
  transition: all 250ms linear;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const TaskList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 280px;
  gap: 8px;
  max-height: calc(154px * 2 + 8px);
  overflow-y: auto;
  overflow-x: hidden;
  

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.column.scrollTrack};
    border: 1px solid ${props => props.theme.column.scrollBorder};
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: ${props => props.theme.column.scrollThumb};
  }

  @media screen and (min-width: 345px) {
    width: 300px;
  }

  @media screen and (min-width: 768px) {
    max-height: calc(154px * 3 + 16px);
    width: 334px;
  }

  @media screen and (min-width: 1440px) {
    max-height: calc(154px * 5 + 32px);
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  height: 56px;
  padding: 14px 24px;
  border-radius: 8px;
  background-color: ${props => props.theme.column.backgroundMain};
  font-weight: 500;
  
  @media screen and (min-width: 345px) {
    width: 300px;
  }

  @media screen and (min-width: 768px) {
    width: 334px;
  }
`;

export const Title = styled.h2`
  color: ${props => props.theme.column.textMain};
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 500;
  letter-spacing: -0.28px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Icon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${props => props.theme.column.icon};
  fill: transparent;
  cursor: pointer;
  transition: all 250ms linear;

  &:hover {
    opacity: 0.4;
    transform: scale(1.4);
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  padding: 14px;
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  margin-bottom: 6px;
  border: none;
  color: ${props => props.theme.column.buttonColor};
  background-color: ${props => props.theme.column.buttonBackground};
  border-radius: 8px;
  transition: all 250ms linear;
  cursor: pointer;
  

  &:hover svg {
    transform: scale(1.1);
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.modal.btnHover};
    opacity: 1;
    border: ${props => props.theme.editProfileModal.inputBorder};
  }

  @media screen and (min-width: 345px) {
    width: 300px;
  }
  @media screen and (min-width: 768px) {
    width: 334px;
  }
`;

export const ButtonPlus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  width: 28px;
  height: 28px;
  background-color: ${props => props.theme.column.plusBackground};
  margin-right: 8px;

  cursor: pointer;
`;

export const PlusIcon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: ${props => props.theme.column.plusColor};
  transition: all 250ms linear;
`;
