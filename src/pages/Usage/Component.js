import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Meta from 'components/Meta';

import useStyles from './styles';

function Usage() {
  const classes = useStyles();

  return (
    <>
      <Meta
        title="Usage"
        description="Usage"
      />
      <Container maxWidth="sm" className={classes.root}>
        <Typography variant="h3">Usage</Typography>
      </Container>
    </>
  );
}

export default Usage;
