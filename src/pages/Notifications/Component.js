import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Meta from 'components/Meta';

import useStyles from './styles';

function Notifications() {
  const classes = useStyles();

  return (
    <>
      <Meta
        title="Notifications"
        description="Notifications"
      />
      <Container maxWidth="sm" className={classes.root}>
        <Typography variant="h3">Notifications</Typography>
      </Container>
    </>
  );
}

export default Notifications;
