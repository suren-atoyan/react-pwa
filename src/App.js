import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';

import withErrorHandler from 'errorHandling';
import { App as ErrorBoundaryFallback } from 'errorHandling/Fallbacks';

import Layout from 'sections/Layout';
import { ThemeProvider } from 'theme';
import { StoreProvider } from 'store';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Box display="flex">
          <CssBaseline />
          <Router>
            <Layout />
          </Router>
        </Box>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default withErrorHandler(App, ErrorBoundaryFallback);
