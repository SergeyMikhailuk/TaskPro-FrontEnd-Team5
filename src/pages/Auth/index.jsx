import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from './styled';

const AuthPage = () => {
  return (
    <Container>
      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default AuthPage;
