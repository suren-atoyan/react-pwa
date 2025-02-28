import { ThemeOptions } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

import { ThemeMode } from './types';

const sharedTheme = {
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
};

// to explore all the options, check out https://mui.com/material-ui/customization/default-theme/
const themes: Record<ThemeMode, ThemeOptions> = {
  light: deepmerge(sharedTheme, {
    palette: {
      mode: 'light',
      background: {
        default: '#f0f0f0', // Light gray background
        paper: '#ffffff', // White paper background
      },
      text: {
        primary: '#000000',
        secondary: '#333333',
      },
    },
  }),

  dark: deepmerge(sharedTheme, {
    palette: {
      mode: 'dark',
      background: {
        default: '#121212', // Dark gray background
        paper: '#1e1e1e', // Slightly lighter dark gray paper background
      },
      text: {
        primary: '#ffffff',
        secondary: '#cccccc',
      },
    },
  }),
};

export default themes;
