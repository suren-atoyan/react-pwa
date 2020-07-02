import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Meta from 'components/Meta';

import useStyles from './styles';

function SEO() {
  const classes = useStyles();

  return (
    <>
      <Meta
        title="SEO"
        description="SEO"
      />
      <Container maxWidth="sm" className={classes.root}>
        <Typography variant="h3">SEO</Typography>
      </Container>
    </>
  );
}

export default SEO;
