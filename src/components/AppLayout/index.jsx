import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { LayoutWrapper } from './styled';

const AppLayout = () => {
  return (
    <LayoutWrapper>
      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
    </LayoutWrapper>
  );
};

export default AppLayout;
