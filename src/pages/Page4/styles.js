import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => {
  return {
    root: {
      display: 'flex',
      'justifyContent': 'center',
      'alignItems': 'center',
      height: '100%',
    },
  };
});

export default useStyles;
