import { atom, useRecoilState } from 'recoil';

import * as effects from 'store/effects';

import { themePair } from 'config';

const themeModeState = atom({
  key: 'themeModeState',
  default: localStorage.getItem('theme-mode') || 'dark',
});

function useTheme() {
  const [themeMode, setThemeMode] = useRecoilState(themeModeState);

  function toggle() {
    const mode = themeMode === themePair[0] ? themePair[1] : themePair[0];
    setThemeMode(mode);
    effects.theme.lsSave(mode);
  }

  return [themeMode, { toggle }];
}

export default useTheme;
