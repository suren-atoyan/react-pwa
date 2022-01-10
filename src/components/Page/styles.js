import { makeStyles } from 'tss-react/mui';

import isMobile from 'utils/isMobile';

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      height: '100%',
//      overflow: 'hidden',
      position: 'relative',
      'paddingLeft': theme.spacing(isMobile ? 1.5 : 3),
      'paddingRight': theme.spacing(isMobile ? 1.5 : 3),
    },
  };
});

export default useStyles;
