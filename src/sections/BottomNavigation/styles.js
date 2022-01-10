//import { makeStyles } from '@material-ui/core/styles';
import { makeStyles } from 'tss-react/mui';

//const useStyles = makeStyles(() => ({

const useStyles = makeStyles()(() => {
  return {
    stickToBottom: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
      color: 'grey',
    },
  };
});

export default useStyles;
