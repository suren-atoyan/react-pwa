import { ThemeProvider, createTheme } from '@mui/material/styles';

import { useThemeMode } from './hooks';
import themes from './themes';
import type { CustomThemeProviderProps } from './types';

function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  const { themeMode } = useThemeMode();

  return <ThemeProvider theme={createTheme(themes[themeMode])}>{children}</ThemeProvider>;
}

export default CustomThemeProvider;
