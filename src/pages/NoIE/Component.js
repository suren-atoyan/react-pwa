import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Meta from 'components/Meta';

import useStyles from './styles';

function NoIE() {
  const classes = useStyles();

  return (
    <>
      <Meta
        title="No IE"
        description="No IE"
      />
      <Container maxWidth="sm" className={classes.root}>
        <Typography variant="h3">No IE</Typography>
      </Container>
    </>
  );
}

export default NoIE;
