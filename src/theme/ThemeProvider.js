import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import useTheme from 'store/theme';

import { themes } from 'config';

function CustomThemeProvider({ children }) {
  const [theme] = useTheme();

  return (
    <ThemeProvider theme={createMuiTheme(themes[theme])}>
      {children}
    </ThemeProvider>
  );
}

export default CustomThemeProvider;
