import { lazy } from 'react';

import AsyncComponentLoader from 'components/AsyncComponentLoader';

const routes = [
  {
    exact: true,
    component: AsyncComponentLoader(lazy(() => import('pages/Welcome'))),
    path: '/',
  },
  {
    exact: true,
    component: AsyncComponentLoader(lazy(() => import('pages/Page1'))),
    path: '/page-1',
  },
  {
    exact: true,
    component: AsyncComponentLoader(lazy(() => import('pages/Page2'))),
    path: '/page-2',
  },
  {
    exact: true,
    component: AsyncComponentLoader(lazy(() => import('pages/Page3'))),
    path: '/page-3',
  },
  {
    exact: true,
    component: AsyncComponentLoader(lazy(() => import('pages/Page4'))),
    path: '/page-4',
  },
  {
    component: AsyncComponentLoader(lazy(() => import('components/NotFound'))),
  },
];

export default routes;
