import React from 'react';

// import { Description, HomeWrapper, Accent } from './styled';
import {HomeWrapper } from './styled';
// import ModalHelp from 'components/ModalWindows/ModalHelp';
// import ModalAdd from 'components/ModalWindows/ModalAdd';
// import ModalEdit from 'components/ModalWindows/ModalEdit';
import MainPart from 'components/MainPart/MainPart';

// import Filter from '../../components/Filter/Filter';

const HomePage = () => {
  return (
    <HomeWrapper>
      {/* <Filter />
      <Description>
        Before starting your project, it is essential{' '}
        <Accent>to create a board</Accent> to visualize and track all the
        necessary tasks and milestones. This board serves as a powerful tool to
        organize the workflow and ensure effective collaboration among team
        members.
      </Description> */}
      {/*<ModalHelp />*/}
      {/*<ModalAdd />*/}
      {/*<ModalEdit />*/}
      <MainPart/>
    </HomeWrapper>
  );
};

export default HomePage;
