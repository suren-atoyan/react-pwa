import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Meta from 'components/Meta';

import useStyles from './styles';

function Structure() {
  const classes = useStyles();

  return (
    <>
      <Meta
        title="Structure"
        description="Structure"
      />
      <Container maxWidth="sm" className={classes.root}>
        <Typography variant="h3">Structure</Typography>
      </Container>
    </>
  );
}

export default Structure;
