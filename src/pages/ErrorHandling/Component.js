import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Meta from 'components/Meta';

import useStyles from './styles';

function ErrorHandling() {
  const classes = useStyles();

  return (
    <>
      <Meta
        title="Error Handling"
        description="Error Handling"
      />
      <Container maxWidth="sm" className={classes.root}>
        <Typography variant="h3">Error Handling</Typography>
      </Container>
    </>
  );
}

export default ErrorHandling;
