import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    list: {
      width: 250,
    },
    toolbar: theme.mixins.toolbar,
  };
});

export default useStyles;
