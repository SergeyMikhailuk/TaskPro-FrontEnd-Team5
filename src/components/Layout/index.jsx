import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

import { ContentWrapper, LayoutWrapper } from './styled';

const Layout = () => (
  <LayoutWrapper>
    <Sidebar />

    <ContentWrapper>
      <Header />

      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
    </ContentWrapper>
  </LayoutWrapper>
);

export default Layout;
