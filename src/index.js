import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import routing from 'containers/routes';

const basename = 'https://sergeymikhailuk.github.io/';

const router = createBrowserRouter(createRoutesFromElements(routing()), {
  basename,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
