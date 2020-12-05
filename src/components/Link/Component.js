import React from 'react';

import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';

import useStyles from './styles';

function Link({ className, ...props }) {
  const classes = useStyles();

  const Component = props.href
    ? ({ children, ...props }) => <a {...props}>{children}</a>
    : RouterLink

  return (
    <Component {...props} className={clsx(classes.root, className)} />
  );
}

export default Link;
