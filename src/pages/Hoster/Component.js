import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Meta from 'components/Meta';

import useStyles from './styles';

function Hoster() {
  const classes = useStyles();

  return (
    <>
      <Meta
        title="Hoster"
        description="Hoster"
      />
      <Container maxWidth="sm" className={classes.root}>
        <Typography variant="h3">Hoster</Typography>
      </Container>
    </>
  );
}

export default Hoster;
