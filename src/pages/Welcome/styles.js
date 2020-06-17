import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    height: '100%',
  },
  wrapper: {
    display: 'flex',
    'user-select': 'none',
    'align-items': ({ isSmallScreen }) => isSmallScreen ? 'center' : 'initial',
    'text-align': 'center',
  },
  icon: {
    width: '100%',
    height: '100%',
    color: theme.palette.secondary.main,
  },
  iconBox: {
    width: 50,
    'margin-right': 10,
  },
  title: {
    'font-weight': 100,
  },
}));

export default useStyles;
