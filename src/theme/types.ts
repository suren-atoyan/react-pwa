import { JSX } from 'react';

enum ThemeMode {
  DARK = 'dark',
  LIGHT = 'light',
}

type CustomThemeProviderProps = {
  children: JSX.Element;
};

export type { CustomThemeProviderProps };
export { ThemeMode };
