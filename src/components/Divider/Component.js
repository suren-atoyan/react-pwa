import React from 'react';

import clsx from 'clsx';
import DividerMU from '@material-ui/core/Divider';

import useStyles from './styles';

function Divider({ className, ...props }) {
  const classes = useStyles();

  return (
    <DividerMU {...props} className={clsx(classes.root, className)}/>
  );
}

export default Divider;
