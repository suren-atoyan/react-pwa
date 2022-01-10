import React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import useTheme from 'store/theme';

import { themes } from 'config';

function CustomThemeProvider({ children }) {
  const [theme] = useTheme();

  return (
    <ThemeProvider theme={createTheme(themes[theme])}>
      {children}
    </ThemeProvider>
  );
}

export default CustomThemeProvider;
