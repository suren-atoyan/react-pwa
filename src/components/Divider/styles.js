import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    horizontal: {
      'marginTop': theme.spacing(2),
      'marginBottom': theme.spacing(2),
    },
    vertical: {
      'marginLeft': theme.spacing(1),
      'marginRight': theme.spacing(1),
    },
  };
});

export default useStyles;