import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    overflow: 'hidden',
    'padding-left': theme.spacing(3),
    'padding-right': theme.spacing(3),
  },
}));

export default useStyles;
