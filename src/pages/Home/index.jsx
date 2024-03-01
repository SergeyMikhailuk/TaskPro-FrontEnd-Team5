import React from 'react';

import { Title } from './styled';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Title>Home Page</Title>
      <Title>Home Page</Title>
      <Link to={'/welcome'}>welcome link</Link>
    </>
  );
};

export default HomePage;
