import React from 'react';
import { Link } from 'react-router-dom';

import { Title, TestIconSvg } from './styled';
import { green } from '@mui/material/colors';
import NewBoardForm from 'components/forms/NewBoardForm';
const HomePage = () => {
  return (
    <>
      <Title>Home Page</Title>
      <Link to={'/welcome'}>welcome link</Link>
      <TestIconSvg $color={ 'green' } />
      <NewBoardForm/>
    </>
  );
};

export default HomePage;
