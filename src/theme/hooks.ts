import { useCallback } from 'react';

import { useAtom } from 'jotai';

import { themeModeState } from './atoms';
import { ThemeMode } from './types';

function useThemeMode() {
  const [themeMode, setThemeMode] = useAtom(themeModeState);

  const toggle = useCallback(
    () =>
      setThemeMode((themeMode) =>
        themeMode === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK,
      ),
    [setThemeMode],
  );

  return {
    themeMode,
    toggle,
    setThemeMode,
    isDarkMode: themeMode === ThemeMode.DARK,
  };
}

export { useThemeMode };
