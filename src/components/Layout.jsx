import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <aside>sidebar</aside>
    <div>
      <header>header</header>
      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
    </div>
  </>
);

export default Layout;
