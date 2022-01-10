import React from 'react';

import clsx from 'clsx';

import { Divider as DividerMU } from '@mui/material';

import useStyles from './styles';

function Divider({ className, withoutMargins, ...props }) {
  const classes = useStyles().classes;

  return (
    <DividerMU
      {...props}
      className={clsx(
        !withoutMargins && (
          props.orientation === 'vertical'
            ? classes.vertical
            : classes.horizontal
        ),
        className,
      )}
    />
  );
}

export default Divider;
