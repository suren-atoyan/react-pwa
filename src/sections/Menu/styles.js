import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  toolbar: theme.mixins.toolbar,
}));

export default useStyles;
