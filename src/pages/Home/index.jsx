import React from 'react';
import { Link } from 'react-router-dom';

import CabinetLayout from 'components/CabinetLayout';

import { Title } from './styled';

const HomePage = () => {
  return (
    <CabinetLayout>
      <Title>Home Page</Title>
      <Link to={'/welcome'}>welcome link</Link>
      <p>test</p>
    </CabinetLayout>
  );
};

export default HomePage;
