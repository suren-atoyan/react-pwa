import React from 'react';

import Content from 'sections/Content';
import Copyright from 'sections/Copyright';
import Navigation from 'sections/Navigation';
import Notifications from 'sections/Notifications';
import BottomNavigation from 'sections/BottomNavigation';

import Fb from 'components/Fb';
import useStyles from './styles';
import isMobile from 'utils/isMobile';

function Layout() {
  const classes = useStyles().classes;

  return (
    <>
      <Notifications />
      {!isMobile && <Navigation />} {/* Only show the top navigation menu if not on mobile */}
      <Fb component="main" className={isMobile ? classes.mobileWrapper : classes.wrapper}> {/* Need to adjust style if there is no top navigation bar */}
        <Fb className={classes.spacer} />
        <Fb column justifyBetween className={classes.content}>
          <Content />
          {!isMobile && <Copyright />} {/* Only show the copyright if not in mobile */}
          {isMobile && <BottomNavigation />} {/* Only show the bottom navigation bar if on mobile */}
        </Fb>
      </Fb>
    </>
  );
}

export default Layout;
