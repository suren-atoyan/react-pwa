import React from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import { copyright, domain } from 'config';

import useStyles from './styles';

function Copyright() {
  const classes = useStyles();

  return (
    <Box pt={2} pb={2}>
      <Typography className={classes.copyright} variant="body2" color="textSecondary" align="center">
        {copyright.title}
        <Link color="inherit" href={domain}>
          {copyright.link}
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}

export default Copyright;
