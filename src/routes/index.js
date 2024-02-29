import { lazy } from 'react';
import { Route, Navigate } from 'react-router-dom';

import Layout from 'components/Layout';

const Home = lazy(() => import('pages/Home'));
const Welcome = lazy(() => import('pages/Welcome'));

const routing = () => (
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="welcome" element={<Welcome />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Route>
);

export default routing;
