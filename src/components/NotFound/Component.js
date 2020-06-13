import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { messages } from 'config';

import useStyles from './styles';

function NotFound() {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Typography variant="h4" className={classes.message}>
        404 Not Found - {messages[404]}
      </Typography>
    </Box>
  );
}

export default NotFound;
