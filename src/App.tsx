import { BrowserRouter } from 'react-router';
import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';

import Header from './sections/Header';
import Sidebar from './sections/Sidebar';
import Pages from './routes/Pages';
import { CssBaseline } from '@mui/material';
import HotKeys from './sections/HotKeys';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <HotKeys />
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Pages />
      </BrowserRouter>
    </Fragment>
  );
}

const AppWithErrorHandler = withErrorHandler(App, AppErrorBoundaryFallback);
export default AppWithErrorHandler;
