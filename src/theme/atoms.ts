import { atomWithStorage } from 'jotai/utils';

import { ThemeMode } from './types';

const themeModeState = atomWithStorage('theme-mode', ThemeMode.DARK);

export { themeModeState };
