import React from 'react';

import { BottomNavigation, BottomNavigationAction } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';
import useStyles from './styles';
import useTheme from 'store/theme';

import {
  FaHome as WelcomeIcon,
  FaJsSquare as JSIcon,
  FaReact as ReactIcon,
  FaBrush as BrushIcon,
} from 'react-icons/fa';

function BottomNavigation_() {
  const classes = useStyles().classes;
  const [value, setValue] = React.useState(0)
  const [, themeActions] = useTheme();

  const handleChange = (event, newValue) => {
        setValue(newValue);
  }

  function handleToggleTheme() {
    themeActions.toggle();
  }

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => handleChange(event, newValue)}
      className={classes.stickToBottom}
    >
      <BottomNavigationAction label="Welcome" icon={<WelcomeIcon />} component={RouterLink} to="/"/>
      <BottomNavigationAction label="Page 1" icon={<JSIcon />} component={RouterLink} to="/page-1"/>
      <BottomNavigationAction label="Page 2" icon={<ReactIcon />} component={RouterLink} to="/page-2"/>
      <BottomNavigationAction label="Theme" icon={<BrushIcon />} onClick={handleToggleTheme} />
    </BottomNavigation>
  );
}

export default BottomNavigation_;