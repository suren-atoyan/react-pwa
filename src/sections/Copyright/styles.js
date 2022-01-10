import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => {
  return {
    copyright: {
      'userSelect': 'none',
    },
  };
});

export default useStyles;
