import { useCallback, useMemo } from 'react';
import { atom, useRecoilState } from 'recoil';

import { Themes } from '@/theme/types';

import type { AtomEffectParams } from '../types';
import type { Actions } from './types';

const themeModeState = atom({
  key: 'theme-mode-state',
  default: 'dark' as Themes,
  effects: [synchronizeWithLocalStorage],
});

function synchronizeWithLocalStorage({ setSelf, onSet }: AtomEffectParams) {
  const storedTheme = localStorage.getItem('theme-mode');
  storedTheme && setSelf(storedTheme);
  onSet((value: Themes) => localStorage.setItem('theme-mode', value));
}

function useTheme(): [Themes, Actions] {
  const [themeMode, setThemeMode] = useRecoilState(themeModeState);

  const toggle = useCallback(() => {
    setThemeMode((mode: Themes) => (mode === Themes.DARK ? Themes.LIGHT : Themes.DARK));
  }, [setThemeMode]);

  const memoizedActions = useMemo(() => ({ toggle }), [toggle]);

  return [themeMode, memoizedActions];
}

export default useTheme;
