import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Meta from 'components/Meta';

import useStyles from './styles';

function Page2() {
  const classes = useStyles();

  return (
    <>
      <Meta
        title="Page 2"
        description="Page 2"
      />
      <Container maxWidth="sm" className={classes.root}>
        <Typography variant="h3">Page 2</Typography>
      </Container>
    </>
  );
}

export default Page2;
