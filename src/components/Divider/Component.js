import React from 'react';

import clsx from 'clsx';
import DividerMU from '@material-ui/core/Divider';

import useStyles from './styles';

function Divider({ className, withoutMargins, ...props }) {
  const classes = useStyles();

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
