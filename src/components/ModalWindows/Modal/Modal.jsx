import {
  ModalWindow,
  ModalHeder,
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
