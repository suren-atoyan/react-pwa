import { ThemeProvider, createTheme } from '@mui/material/styles';

import themes from './themes';
import type { CustomThemeProviderProps } from './types';
import { useThemeMode } from './hooks';

function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  const { themeMode } = useThemeMode();

  return <ThemeProvider theme={createTheme(themes[themeMode])}>{children}</ThemeProvider>;
}

export default CustomThemeProvider;
