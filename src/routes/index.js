import React, { lazy } from 'react';
import { Route, Navigate } from 'react-router-dom';

import AppLayout from 'components/AppLayout';
import CabinetLayout from 'components/CabinetLayout';
import BaseRedirect from 'routes/BaseRedirect';
import RestrictedRoute from 'routes/RestrictedRoute';
import PrivateRoute from 'routes/PrivateRoute';
import LoginForm from 'components/Login';
import RegisterForm from 'components/Register';
import HandleAuth from 'pages/HandleGoogleAuth';

const Welcome = lazy(() => import('pages/Welcome'));
const Home = lazy(() => import('pages/Home'));
const Board = lazy(() => import('pages/Board'));
const Auth = lazy(() => import('pages/Auth'));

const routing = () => (
  <Route path="/" element={<AppLayout />}>
    <Route index element={<BaseRedirect />} />
    <Route
      path="welcome"
      element={
        <RestrictedRoute redirectTo="/home">
          <Welcome />
        </RestrictedRoute>
      }
    />

    <Route path="home" element={<CabinetLayout />}>
      <Route
        index
        element={
          <PrivateRoute redirectTo="/welcome">
            <Home />
          </PrivateRoute>
        }
      />

      <Route
        path=":boardName"
        element={
          <PrivateRoute redirectTo="/welcome">
            <Board />
          </PrivateRoute>
        }
      />
    </Route>
    <Route path="auth" element={<Auth />}>
      <Route index element={<Navigate to="/welcome" replace />} />
      <Route
        path="login"
        element={
          <RestrictedRoute redirectTo="/home">
            <LoginForm />
          </RestrictedRoute>
        }
      />
      <Route
        path="register"
        element={
          <RestrictedRoute redirectTo="/home">
            <RegisterForm />
          </RestrictedRoute>
        }
      />
    </Route>
    <Route path="/handle-auth" element={<HandleAuth />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Route>
);

export default routing;
