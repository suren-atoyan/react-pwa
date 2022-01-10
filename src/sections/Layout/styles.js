import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    spacer: theme.mixins.toolbar,
    wrapper: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'hidden',
      position: 'relative',
      width: '100%',
      marginTop: '80px',
    },
    mobileWrapper: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'hidden',
      position: 'relative',
      width: '100%',
      marginTop: '10px',
    },
    content: {
      width: '100%',
      height: `calc(100% - ${theme.mixins.toolbar + theme.spacing(1)}px)`,
    },
  };
});

export default useStyles;
