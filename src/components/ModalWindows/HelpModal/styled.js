import styled from 'styled-components';

export const ModalContainer = styled.div`
  align-items: start;
  background-color: ${props => props.theme.modal.backgroundMain};
`;


export const ModalFormikBox = styled.div`
  margin-bottom: 24px;
  display: flex;
 flex-direction: column;
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

  @media screen and (min-width: 345px) {
    width: 287px;
  }

  @media screen and (min-width: 768px) {
    width: 352px;
  }
`;

export const ModalFormikBoxInputComment = styled.textarea`
  font-size: 14px;
  letter-spacing: -0.32px;
  color: ${props => props.theme.needHelpModal.textMain};
  width: 250px;
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

  @media screen and (min-width: 345px) {
    width: 287px;
  }

  @media screen and (min-width: 768px) {
    width: 352px;
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
  width: 250px;
  padding: 14px;
  background-color: ${props => props.theme.modal.buttonBackground};
  border-radius: 8px;
  border: none;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.modal.btnHover};
  }

  @media screen and (min-width: 345px) {
    width: 287px;
  }

  @media screen and (min-width: 768px) {
    width: 352px;
  }
`;
