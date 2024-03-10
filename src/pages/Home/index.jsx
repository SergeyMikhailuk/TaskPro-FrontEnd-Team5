import React from 'react';

import { Description, HomeWrapper, Accent } from './styled';
import Filter from '../../components/Filter/Filter';

const HomePage = () => {
  return (
    <HomeWrapper>
      <Filter />
      <Description>
        Before starting your project, it is essential
        <Accent>to create a board</Accent> to visualize and track all the
        necessary tasks and milestones. This board serves as a powerful tool to
        organize the workflow and ensure effective collaboration among team
        members.
      </Description>
    </HomeWrapper>
  );
};

export default HomePage;