import { lazy } from 'react';
import { Route, Navigate } from 'react-router-dom';

import Layout from 'components/Layout';

const Welcome = lazy(() => import('pages/Welcome'));

const routing = () => (
  <Route path="/" element={<Layout />}>
    <Route path="welcome" element={<Welcome />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Route>
);

export default routing;
