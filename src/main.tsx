import React from 'react';
import { createRoot } from 'react-dom/client';

import asyncComponentLoader from '@/utils/loader';

const App = asyncComponentLoader(() => import('./App'));

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
