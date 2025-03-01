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
    MuiDivider: {
      styleOverrides: {
        vertical: {
          marginRight: 10,
          marginLeft: 10,
        },
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
        default: '#fafafa',
        paper: '#fff',
      },
    },
  }),

  dark: deepmerge(sharedTheme, {
    palette: {
      mode: 'dark',
      background: {
        default: '#111',
        paper: '#171717',
      },
    },
  }),
};

export default themes;
