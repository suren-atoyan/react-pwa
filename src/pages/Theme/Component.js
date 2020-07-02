import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Meta from 'components/Meta';

import useStyles from './styles';

function Theme() {
  const classes = useStyles();

  return (
    <>
      <Meta
        title="Theme"
        description="Theme"
      />
      <Container maxWidth="sm" className={classes.root}>
        <Typography variant="h3">Theme</Typography>
      </Container>
    </>
  );
}

export default Theme;
