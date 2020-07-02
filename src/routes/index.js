import { asyncComponentLoader } from 'utils';

const routes = [
  {
    exact: true,
    component: asyncComponentLoader(_ => import('pages/Welcome')),
    path: '/',
    details: {
      title: 'Welcome',
    },
  },
  {
    exact: true,
    component: asyncComponentLoader(_ => import('pages/Usage')),
    path: '/usage',
    details: {
      title: 'Usage',
    },
  },
  {
    exact: true,
    component: asyncComponentLoader(_ => import('pages/CRA')),
    path: '/cra',
    details: {
      title: 'CRA',
    },
  },
  {
    exact: true,
    component: asyncComponentLoader(_ => import('pages/MaterialUI')),
    path: '/mui',
    details: {
      title: 'Material UI',
    },
  },
  {
    exact: true,
    component: asyncComponentLoader(_ => import('pages/Store')),
    path: '/store',
    details: {
      title: 'Store',
    },
  },
  {
    exact: true,
    component: asyncComponentLoader(_ => import('pages/Notifications')),
    path: '/notifications',
    details: {
      title: 'Notifications',
    },
  },
  {
    exact: true,
    component: asyncComponentLoader(_ => import('pages/ErrorHandling')),
    path: '/error-handling',
    details: {
      title: 'Error Handling',
    },
  },
  {
    exact: true,
    component: asyncComponentLoader(_ => import('pages/ServiceWorker')),
    path: '/service-worker',
    details: {
      title: 'Service Worker',
    },
  },
  {
    exact: true,
    component: asyncComponentLoader(_ => import('pages/SEO')),
    path: '/seo',
    details: {
      title: 'SEO',
    },
  },
  {
    exact: true,
    component: asyncComponentLoader(_ => import('pages/NoIE')),
    path: '/no-ie',
    details: {
      title: 'No IE',
    },
  },
  {
    exact: true,
    component: asyncComponentLoader(_ => import('pages/Hoster')),
    path: '/hoster',
    details: {
      title: 'Hoster',
    },
  },
  {
    exact: true,
    component: asyncComponentLoader(_ => import('pages/Structure')),
    path: '/structure',
    details: {
      title: 'Structure',
    },
  },
  {
    exact: true,
    component: asyncComponentLoader(_ => import('pages/Size')),
    path: '/size',
    details: {
      title: 'Size',
    },
  },
  {
    exact: true,
    component: asyncComponentLoader(_ => import('pages/Audit')),
    path: '/audit',
    details: {
      title: 'Audit',
    },
  },
  {
    component: asyncComponentLoader(_ => import('components/NotFound')),
  },
];

export default routes;
