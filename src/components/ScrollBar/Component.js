import React from 'react';

import clsx from 'clsx';
import { Scrollbars } from 'react-custom-scrollbars';

import useStyles from './styles';

function ScrollBar({ className, ...props }) {
  const classes = useStyles();

  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      renderView={props => (
        <div {...props} style={{ ...props.style, overflowX: 'hidden' }} />
      )}
      {...props}
      className={clsx(classes.root, className)}
    />
  );
}

export default ScrollBar;
