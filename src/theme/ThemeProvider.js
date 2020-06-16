import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import { useStore } from 'store';

import { themes } from 'config';

function CustomThemeProvider({ children }) {
  const { state: { theme } } = useStore();

  return (
    <ThemeProvider theme={createMuiTheme(themes[theme.mode])}>
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
