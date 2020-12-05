import asyncComponentLoader from 'utils/asyncComponentLoader';

const routes = [
  {
    exact: true,
    component: asyncComponentLoader(() => import('pages/Welcome')),
    path: '/',
  },
  {
    exact: true,
    component: asyncComponentLoader(() => import('pages/Page1')),
    path: '/page-1',
  },
  {
    exact: true,
    component: asyncComponentLoader(() => import('pages/Page2')),
    path: '/page-2',
  },
  {
    exact: true,
    component: asyncComponentLoader(() => import('pages/Page3')),
    path: '/page-3',
  },
  {
    exact: true,
    component: asyncComponentLoader(() => import('pages/Page4')),
    path: '/page-4',
  },
  {
    component: asyncComponentLoader(() => import('components/NotFound')),
  },
];

export default routes;
