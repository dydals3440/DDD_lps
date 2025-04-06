import { createBrowserRouter, RouterProvider } from 'react-router';
import Landing from './components/pages/Landing';

const router = createBrowserRouter([{ path: '/', element: <Landing /> }]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
