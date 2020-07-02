import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Meta from 'components/Meta';

import useStyles from './styles';

function CRA() {
  const classes = useStyles();

  return (
    <>
      <Meta
        title="CRA"
        description="Create React App"
      />
      <Container maxWidth="sm" className={classes.root}>
        <Typography variant="h3">CRA</Typography>
      </Container>
    </>
  );
}

export default CRA;
