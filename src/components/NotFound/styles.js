import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    'overflow-y': 'auto',
    'overflow-x': 'hidden',
  },
  giphy: {
    'min-width': 768,
    'min-height': 324,
    width: '100%',
  },
  message: {
    'margin-top': theme.spacing(2),
    'text-align': 'center',
  },
}));

export default useStyles;
