import { atom, useRecoilState } from 'recoil';

import { themePair } from 'config';

const themeModeState = atom({
  key: 'themeModeState',
  default: 'dark',
  effects_UNSTABLE: [
    synchronizeWithLocalStorage,
  ],
});

function synchronizeWithLocalStorage({ setSelf, onSet }) {
  const storedTheme = localStorage.getItem('theme-mode');
  storedTheme && setSelf(storedTheme);

  onSet(value => localStorage.setItem('theme-mode', value));
}

function useTheme() {
  const [themeMode, setThemeMode] = useRecoilState(themeModeState);

  function toggle() {
    setThemeMode(mode => mode === themePair[0] ? themePair[1] : themePair[0]);
  }

  return [themeMode, { toggle }];
}

export default useTheme;
