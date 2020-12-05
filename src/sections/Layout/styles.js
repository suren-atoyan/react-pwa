import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  spacer: theme.mixins.toolbar,
  wrapper: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
  },
  content: {
    width: '100%',
    height: `calc(100% - ${theme.mixins.toolbar + theme.spacing(1)}px)`,
  },
}));

export default useStyles;
