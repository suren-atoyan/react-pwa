import React from 'react';

import { RecoilRoot } from 'recoil';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';

import withErrorHandler from 'errorHandling';
import { App as ErrorBoundaryFallback } from 'errorHandling/Fallbacks';

import Layout from 'sections/Layout';
import { ThemeProvider } from 'theme';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <Box display="flex">
          <CssBaseline />
          <Router>
            <Layout />
          </Router>
        </Box>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default withErrorHandler(App, ErrorBoundaryFallback);
