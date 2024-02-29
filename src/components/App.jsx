import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import routing from 'containers/routes';

const basename = '/';

const router = createBrowserRouter(createRoutesFromElements(routing()), {
  basename,
});

const App = () => <RouterProvider router={router} />;

export default App;
