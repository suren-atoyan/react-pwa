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
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-between',
    height: `calc(100% - ${theme.mixins.toolbar.minHeight + 8}px)`,
  },
}));

export default useStyles;
