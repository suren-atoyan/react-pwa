import React from 'react';

import { Box, Typography } from '@mui/material';

import { messages } from 'config';

import useStyles from './styles';

function LoaderErrorBoundaryFallback() {
  const classes = useStyles().classes;

  return (
    <Box className={classes.root}>
      <Typography variant="h5">
        {messages.loader.fail}
      </Typography>
    </Box>
  );
}

export default LoaderErrorBoundaryFallback;
