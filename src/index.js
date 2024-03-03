import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import 'modern-normalize';
import 'styles/base.css';

import routing from 'routes';

const router = createBrowserRouter(createRoutesFromElements(routing()), {
  basename: '/TaskPro-FrontEnd-Team5',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
