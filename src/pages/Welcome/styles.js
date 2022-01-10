//import { makeStyles } from '@material-ui/core/styles';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    wrapper: {
      height: '100%',
      'userSelect': 'none',
      'textAlign': 'center',
    },
    icon: {
      width: '100%',
      height: '100%',
      color: theme.palette.secondary.main,
    },
    iconBox: {
      width: 50,
      'marginRight': 10,
    },
    title: {
      'fontWeight': 100,
    },
  };
});

export default useStyles;
