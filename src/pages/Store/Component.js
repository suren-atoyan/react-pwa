import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Meta from 'components/Meta';

import useStyles from './styles';

function Store() {
  const classes = useStyles();

  return (
    <>
      <Meta
        title="Store"
        description="Store"
      />
      <Container maxWidth="sm" className={classes.root}>
        <Typography variant="h3">Store</Typography>
      </Container>
    </>
  );
}

export default Store;
