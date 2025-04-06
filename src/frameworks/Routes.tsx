import { createBrowserRouter, RouterProvider } from 'react-router';
import Landing from './components/pages/Landing';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const router = createBrowserRouter([{ path: '/', element: <Landing /> }]);

const queryClient = new QueryClient();

export const Routes = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
