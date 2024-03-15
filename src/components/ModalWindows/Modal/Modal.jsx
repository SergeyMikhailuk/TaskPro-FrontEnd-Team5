import {
  ModalWindow,
  ModalHeader,
  Title,
  ClosedButton,
  CloseModal,
} from './styled';

ModalWindow.setAppElement('#root');

const customStyles = {
  overlay: {
    zIndex: 1000,
  },
  content: {
    zIndex: 1001,
  },
};

export const ReactModal = ({
  isOpen,
  title,
  children,
  closeModal,
  onRequestClose,
}) => {
  return (
    <ModalWindow
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <ModalHeader>
        <Title>{title}</Title>
        <ClosedButton>
          <CloseModal onClick={closeModal} />
        </ClosedButton>
      </ModalHeader>
      {children}
    </ModalWindow>
  );
};
