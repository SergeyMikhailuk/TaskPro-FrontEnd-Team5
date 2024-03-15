import { useState } from 'react';
import { Description, Accent } from './styled';
import AddBoardModal from 'components/ModalWindows/BoardModal/AddBoard';

const BeforeStart = () => {
  const [isOpenBoardModal, setIsOpenBoardModal] = useState(false);

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
        <AddBoardModal closeModal={() => setIsOpenBoardModal(false)} />
      )}
    </>
  );
};

export default BeforeStart;
