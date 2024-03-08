import styled from 'styled-components';

import { ReactComponent as CloseModalSvg } from 'images/modal/close-modal-btn-icon.svg';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(28, 28, 28, 0.5);
  backdrop-filter: blur(5px);
`;

export const ModalContainer = styled.div`
  width: 300px;
  padding: 14px;
  background-color: ${props => props.theme.modal.backgroundMain};
  border: 1px solid rgba(190, 219, 176, 0.5);
  border-radius: 8px;
  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.05);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 375px) {
    width: 335px;
    padding: 24px;
  }
`;

export const ModalCloseBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ModalCloseBtnWrap = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  background-color: transparent;
  border: none;
`;

export const ModalCloseBtnIcon = styled(CloseModalSvg)`
  color: ${props => props.theme.needHelpModal.buttonColor};
  position: absolute;
  top: 0;
  right: 0;
  width: 18px;
  height: 18px;
`;

export const ModalTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.32px;
  color: ${props => props.theme.needHelpModal.textMain};
  margin-bottom: 24px;
`;

export const ModalFormikBox = styled.div`
  margin-bottom: 24px;
`;

export const ModalFormikBoxInputEmail = styled.input`
  font-size: 14px;
  letter-spacing: -0.32px;
  color: ${props => props.theme.needHelpModal.textMain};
  width: 100%;
  padding: 14px 18px;
  border: 1px solid ${props => props.theme.editProfileModal.inputBorder};
  border-radius: 8px;
  opacity: 0.4;
  background-color: transparent;
  margin-bottom: 14px;
  outline: none;

  &:hover,
  &:focus {
    color: ${props => props.theme.editProfileModal.textMain};
    opacity: 1;
    border: 1px solid ${props => props.theme.editProfileModal.inputBorder};
  }
`;

export const ModalFormikBoxInputComment = styled.textarea`
  font-size: 14px;
  letter-spacing: -0.32px;
  color: ${props => props.theme.needHelpModal.textMain};
  width: 100%;
  height: 120px;
  padding: 14px 18px;
  border: 1px solid ${props => props.theme.editProfileModal.inputBorder};
  border-radius: 8px;
  opacity: 0.4;
  background-color: transparent;
  resize: none;
  outline: none;

  &:hover,
  &:focus {
    color: ${props => props.theme.editProfileModal.textMain};
    opacity: 1;
    border: 1px solid ${props => props.theme.editProfileModal.inputBorder};
  }

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.column.scrollThumb};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.column.scrollTrack};
    border-radius: 5px;
    border: 1px solid ${props => props.theme.column.scrollBorder};
  }
`;

export const ModalFormikBoxBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.modal.buttonText};
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.32px;
  width: 100%;
  padding: 14px;
  background-color: ${props => props.theme.modal.buttonBackground};
  border-radius: 8px;
  border: none;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.modal.btnHover};
  }
`;
