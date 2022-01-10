import React from 'react';

import { RecoilRoot } from 'recoil';
import { CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';

import withErrorHandler from 'errorHandling';
import { App as ErrorBoundaryFallback } from 'errorHandling/Fallbacks';

import Layout from 'sections/Layout';
import Fb from 'components/Fb';
import { ThemeProvider } from 'theme';

import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <Fb>
          <CssBaseline />
          <StyledEngineProvider injectFirst>
            <Router>
              <Layout />
            </Router>
          </StyledEngineProvider>
        </Fb>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default withErrorHandler(App, ErrorBoundaryFallback);
