import React from 'react';

import { CircularProgress, Paper } from '@mui/material';
import clsx from 'clsx';

import useStyles from './styles';

function Loading({ size, withoutBackground, position = 'absolute' }) {
  const classes = useStyles({ position }).classes;

  return (
    <Paper
      elevation={0}
      square={true}
      className={clsx(classes.preloader, withoutBackground && classes.open)}
    >
      <CircularProgress thickness={1.5} color="inherit" size={size} />
    </Paper>
  );
}

Loading.defaultProps = {
  size: 50,
};

export default Loading;
