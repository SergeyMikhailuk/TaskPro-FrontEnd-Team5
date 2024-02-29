import React from 'react';

import { Title } from './styled';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <>
      <Title>Welcome Page</Title>
      <Link to={'/'}>home link</Link>
    </>
  );
};

export default WelcomePage;
