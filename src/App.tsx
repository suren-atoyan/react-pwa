import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
import Header from '@/sections/Header';
import HotKeys from '@/sections/HotKeys';
import Notifications from '@/sections/Notifications';
import { useSW } from '@/sections/SW';
import Sidebar from '@/sections/Sidebar';

function App() {
  // useEffect(() => {
  //   if ('serviceWorker' in navigator) {
  //     navigator.serviceWorker
  //       .register('/service-worker.ts')
  //       .then((registration) => console.log('scope is: ', registration.scope));
  //   }
  // }, []);
  const { subscription } = useSW();

  return (
    <Fragment>
      <CssBaseline />
      <Notifications />
      <HotKeys />
      <BrowserRouter>
        <Header subscription={subscription} />
        <Sidebar />
        <Pages />
      </BrowserRouter>
    </Fragment>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
