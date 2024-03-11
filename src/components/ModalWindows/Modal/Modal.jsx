import React from 'react';
import Modal from 'react-modal';

import {
  ModalWindow,
  ModalHeder,
  Title,
  ClosedButton,
  CloseModal,
} from './styled';



  Modal.setAppElement('#root');

  
  
export const ReactModal = ({ isOpen, title, children, closeModal, onRequestClose }) => {
  return (
    <ModalWindow isOpen={isOpen} onRequestClose={onRequestClose}>
      <ModalHeder>
        <Title>{title}</Title>
        <ClosedButton>
          <CloseModal onClick={closeModal} />
        </ClosedButton>
      </ModalHeder>
      {children}
    </ModalWindow>
  );
};
