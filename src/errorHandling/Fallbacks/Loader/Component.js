import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { messages } from 'config';

import useStyles from './styles';

function LoaderErrorBoundaryFallback() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h5">
        {messages.loader.fail}
      </Typography>
    </Box>
  );
}

export default LoaderErrorBoundaryFallback;
