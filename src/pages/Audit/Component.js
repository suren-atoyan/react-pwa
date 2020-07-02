import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Meta from 'components/Meta';

import useStyles from './styles';

function Audit() {
  const classes = useStyles();

  return (
    <>
      <Meta
        title="Audit"
        description="Audit"
      />
      <Container maxWidth="sm" className={classes.root}>
        <Typography variant="h3">Audit</Typography>
      </Container>
    </>
  );
}

export default Audit;
