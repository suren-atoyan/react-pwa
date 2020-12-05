import { makeStyles } from '@material-ui/core/styles';

import isMobile from 'utils/isMobile';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    'padding-left': theme.spacing(isMobile ? 1.5 : 3),
    'padding-right': theme.spacing(isMobile ? 1.5 : 3),
  },
}));

export default useStyles;
