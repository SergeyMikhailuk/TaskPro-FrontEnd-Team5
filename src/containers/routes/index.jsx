import { lazy } from 'react';
import { Route, Navigate } from 'react-router-dom';

import Layout from 'components/Layout';
const Home = lazy(() => import('containers/pages/Home'));

const routing = () => (
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Route>
);

export default routing;
