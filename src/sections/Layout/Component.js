import React from 'react';

import Content from 'sections/Content';
import Copyright from 'sections/Copyright';
import Navigation from 'sections/Navigation';
import Notifications from 'sections/Notifications';

import Fb from 'components/Fb';
import useStyles from './styles';

function Layout() {
  const classes = useStyles();

  return (
    <>
      <Notifications />
      <Navigation />
      <Fb component="main" className={classes.wrapper}>
        <Fb className={classes.spacer} />
        <Fb column justifyBetween className={classes.content}>
          <Content />
          <Copyright />
        </Fb>
      </Fb>
    </>
  );
}

export default Layout;
