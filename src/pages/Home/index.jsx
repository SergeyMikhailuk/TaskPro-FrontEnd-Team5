import React from 'react';

import { Description, HomeWrapper, Accent } from './styled';
import ModalHelp from 'components/ModalWindows/ModalHelp';
import ModalAdd from 'components/ModalWindows/ModalAdd';
import ModalEdit from 'components/ModalWindows/ModalEdit';

const HomePage = () => {
  return (
    <HomeWrapper>
      <Description>
        Before starting your project, it is essential{' '}
        <Accent>to create a board</Accent> to visualize and track all the
        necessary tasks and milestones. This board serves as a powerful tool to
        organize the workflow and ensure effective collaboration among team
        members.
      </Description>
      <ModalHelp />
      <ModalAdd />
      <ModalEdit />
    </HomeWrapper>
  );
};

export default HomePage;
