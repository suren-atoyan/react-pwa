import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      height: '100%',
      'overflow-y': 'auto',
      'overflow-x': 'hidden',
    },
    giphy: {
      'minWidth': 768,
      'minHeight': 324,
      width: '100%',
    },
    message: {
      'marginTop': theme.spacing(2),
      'textAlign': 'center',
    },
  };
});

export default useStyles;
