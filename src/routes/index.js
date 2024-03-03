import { lazy } from 'react';
import { Route, Navigate } from 'react-router-dom';

import AppLayout from 'components/AppLayout';
import BaseRedirect from './BaseRedirect';

const Welcome = lazy(() => import('pages/Welcome'));
const Home = lazy(() => import('pages/Home'));

const routing = () => (
  <Route path="/" element={<AppLayout />}>
    <Route index element={<BaseRedirect />} />

    <Route path="welcome" element={<Welcome />} />

    <Route path="home" element={<Home />}>
      <Route path=":boardName" element={<>Current Board</>} />
    </Route>

    <Route path="auth/:id" element={<>Auth Page</>}>
      <Route path="login" element={<>Login Form</>} />
      <Route path="register" element={<>Register Form</>} />
    </Route>

    <Route path="*" element={<Navigate to="/" />} />
  </Route>
);

export default routing;