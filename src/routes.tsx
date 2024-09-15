import { RouteObject } from 'react-router-dom';
import HomePage from './components/pages/home';
import SpinnerPage from './components/pages/spinner';
import CustomerPage from './components/pages/customer';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/spinner',
    element: <SpinnerPage />,
  },
  {
    path: '/customer',
    element: <CustomerPage />,
  },
];

export default routes;
