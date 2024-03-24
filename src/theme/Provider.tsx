import { ThemeProvider, createTheme } from '@mui/material/styles';

import useTheme from '@/store/theme';

import themes from './themes';
import type { CustomThemeProviderProps } from './types';

function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  const [theme] = useTheme();

  return <ThemeProvider theme={createTheme(themes['light'])}>{children}</ThemeProvider>;
}

export default CustomThemeProvider;
