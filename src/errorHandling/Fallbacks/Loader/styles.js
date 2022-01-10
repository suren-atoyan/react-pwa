import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => {
  return {
    root: {
      display: 'flex',
      height: '100%',
      'justifyContent': 'center',
      'alignItems': 'center',
    },
  };
});

export default useStyles;
