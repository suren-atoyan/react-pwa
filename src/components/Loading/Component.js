import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';

import useStyles from './styles';

function Loading({ size, withoutBackground }) {
  const classes = useStyles();

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
