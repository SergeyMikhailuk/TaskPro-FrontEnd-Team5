import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import 'modern-normalize';
import 'styles/base.css';

import { store, persistor } from 'store';
import routing from 'routes';

const clientId =
  '1023104140440-vss57ruceqsueoq2cg98ord06sso814v.apps.googleusercontent.com';

const router = createBrowserRouter(createRoutesFromElements(routing()), {
  basename: '/TaskPro-FrontEnd-Team5',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <GoogleOAuthProvider clientId={clientId}>
          <RouterProvider router={router} />{' '}
        </GoogleOAuthProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
