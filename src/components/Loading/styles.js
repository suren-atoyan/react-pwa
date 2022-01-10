import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    preloader: {
      zIndex: 10,
      position: ({ position }) => position,
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      'backgrounColor': theme.palette.background.default,
    },
    open: {
      background: 'none',
    },
  };
});

export default useStyles;
