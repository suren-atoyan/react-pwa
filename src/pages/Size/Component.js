import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Meta from 'components/Meta';

import useStyles from './styles';

function Size() {
  const classes = useStyles();

  return (
    <>
      <Meta
        title="Size"
        description="Size"
      />
      <Container maxWidth="sm" className={classes.root}>
        <Typography variant="h3">Size</Typography>
      </Container>
    </>
  );
}

export default Size;
