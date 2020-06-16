import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Meta from 'components/Meta';

import useStyles from './styles';

function Page4() {
  const classes = useStyles();

  return (
    <>
      <Meta
        title="Page 4"
        description="Page 4"
      />
      <Container maxWidth="sm" className={classes.root}>
        <Typography variant="h3">Page 4</Typography>
      </Container>
    </>
  );
}

export default Page4;
