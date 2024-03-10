import styled from 'styled-components';
import Modal from 'react-modal';

import { ReactComponent as AppEditCardSvg } from 'images/sidebar/edit-card.svg';
import { ReactComponent as AppTrashCardSvg } from 'images/sidebar/trash-card.svg';
import { ReactComponent as AppBtnSvg } from 'images/sidebar/add-btn.svg';

export const Wrapper = styled.div``;


export const ModalWindow = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 335px;
  max-height: 80vh;
  min-height: 200px;
  overflow-y: auto;
  padding: 24px;
  background-color: ${props => props.theme.modal.backgroundMain};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`


export const AddCardCreateBtn = styled(AppBtnSvg)`
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

export const CardstBtnEdit = styled(AppEditCardSvg)`
  width: 16px;
  height: 16px;
  color: ${props => props.theme.sidebar.addButtonBackground};
`;

export const CardsBtnDelete = styled(AppTrashCardSvg)`
  width: 16px;
  height: 16px;
  color: ${props => props.theme.sidebar.addButtonBackground};
`


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
  width: 350px;
  gap: 8px;
  max-height: calc(154px * 2 + 8px);
  padding-right: 8px;

  overflow-y: scroll;

  overflow-y: scroll;
  width: 350px;

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

  @media screen and (min-height: 780px) {
    max-height: calc(154px * 3 + 16px);
    overflow-y: scroll;
    width: 350px;
  }

  @media screen and (min-height: 942px) {
    max-height: calc(154px * 4 + 24px);
    overflow-y: scroll;
    width: 350px;
  }

  @media screen and (min-height: 1104px) {
    max-height: calc(154px * 5 + 32px);
    overflow-y: scroll;
    width: 350px;
  }
`;

// header
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 334px;
  height: 56px;
  padding: 14px 24px;

  border-radius: 8px;
  background-color: ${props => props.theme.column.backgroundMain};
  font-weight: 500;
`;

export const Title = styled.h2`
  color: ${props => props.theme.column.textMain};
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 500;
  letter-spacing: -0.28px;
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
  width: 334px;
  padding: 14px;
  margin-bottom: 16px;

  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;

  border: none;
  color: ${props => props.theme.column.buttonColor};
  background-color: ${props => props.theme.column.buttonBackground};
  border-radius: 8px;

  transition: all 250ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
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
  padding: 7px;

  transition: all 250ms linear;

  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const PlusIcon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: ${props => props.theme.column.plusColor};
`;