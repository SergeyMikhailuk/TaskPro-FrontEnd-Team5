import styled from 'styled-components';
import Modal from 'react-modal';
import { ReactComponent as CloseBtn } from 'images/svg/close.svg';


export const ModalWindow = styled(Modal)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 80vh;
    min-height: 200px;
    overflow-y: auto;
    padding: 24px;
    background-color: ${props => props.theme.modal.backgroundMain};
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: flex; 
    flex-direction: column;
    width: fit-content; 
`;

export const ModalHeder = styled.div`
margin-bottom: 24px;

`



export const CloseModal = styled(CloseBtn)`
  width: 18px;
  height: 18px;  
  color: ${props => props.theme.modal.textMain};
`;

export const ClosedButton = styled.button`
  position: absolute;
  right: 14px;
  top: 14px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  padding: 0;
`;


export const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  margin: 0;
  font-weight: 500;
  letter-spacing: -0.36px;
  color: ${props => props.theme.modal.textMain};
`;