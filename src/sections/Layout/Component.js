import React from 'react';

import Box from '@material-ui/core/Box';

import Content from 'sections/Content';
import Copyright from 'sections/Copyright';
import Navigation from 'sections/Navigation';

import useStyles from './styles';

function Layout() {
  const classes = useStyles();

  return (
    <>
      <Navigation />
      <Box component="main" className={classes.content}>
        <Box className={classes.appBarSpacer} />
        <Box className={classes.mainSection}>
          <Content />
          <Copyright />
        </Box>
      </Box>
    </>
  );
}

export default Layout;
