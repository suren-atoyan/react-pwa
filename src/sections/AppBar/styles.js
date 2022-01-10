import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    toolbar: {
      'justifyContent': 'space-between',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      }),
    },
    main: {
      'alignItems': 'center',
    },
    title: {
      'fontWeight': '100',
    },
  };
});

export default useStyles;
