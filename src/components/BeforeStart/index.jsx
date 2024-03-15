import { useState } from 'react';
import { Description, Accent } from './styled';
import BoardModal from 'components/ModalWindows/BoardModal/index';
import { ReactModal } from 'components/ModalWindows/Modal/Modal';

const BeforeStart = () => {
  const [isOpenBoardModal, setIsOpenBoardModal] = useState(false);

  const handleCloseBoardModal = () => {
    setIsOpenBoardModal(false);
  };

  return (
    <>
      <Description>
        Before starting your project, it is essential
        <Accent onClick={() => setIsOpenBoardModal(true)}>
          to create a board
        </Accent>{' '}
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </Description>

      {isOpenBoardModal && (
        <ReactModal
          isOpen={isOpenBoardModal}
          title="New board"
          closeModal={handleCloseBoardModal}
          onRequestClose={handleCloseBoardModal}
        >
          <BoardModal closeModal={handleCloseBoardModal} typeModal={'create'} />
        </ReactModal>
      )}
    </>
  );
};

export default BeforeStart;
