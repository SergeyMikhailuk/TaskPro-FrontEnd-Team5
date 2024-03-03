import React from 'react';
import { Link } from 'react-router-dom';

import { Title } from './styled';

const HomePage = () => {
  return (
    <>
      <Title>Home Page</Title>
      <Link to={'/welcome'}>welcome link</Link>
      <p>test</p>
    </>
  );
};

export default HomePage;
