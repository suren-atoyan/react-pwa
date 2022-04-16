import { Fragment } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import CssBaseline from '@mui/material/CssBaseline';

import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
import Header from '@/sections/Header';
import HotKeys from '@/sections/HotKeys';
import Notifications from '@/sections/Notifications';
import SW from '@/sections/SW';
import Sidebar from '@/sections/Sidebar';
import ThemeProvider from '@/theme/Provider';

function App() {
  return (
    <RecoilRoot>
      <HelmetProvider>
        <ThemeProvider>
          <Fragment>
            <CssBaseline />
            <Notifications />
            <HotKeys />
            <SW />
            <BrowserRouter>
              <Header />
              <Sidebar />
              <Pages />
            </BrowserRouter>
          </Fragment>
        </ThemeProvider>
      </HelmetProvider>
    </RecoilRoot>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
