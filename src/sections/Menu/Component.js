import React from 'react';

import { SwipeableDrawer, ListItemIcon, ListItemText, List, MenuItem } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

import { withStyles } from "tss-react/mui";

import {
  FaHome as WelcomeIcon,
  FaJsSquare as JSIcon,
  FaReact as ReactIcon,
  FaGithub as GithubIcon,
  FaBug as BugIcon,
} from 'react-icons/fa';

import isMobile from 'utils/isMobile';

import useStyles from './styles';

const StyledMenuItem = withStyles(
  (props => <MenuItem {...props} />),
  {
    root: { width: '100%' }
  },
);

function Menu({ isOpen, onClose, onOpen }) {
  const classes = useStyles({
    isOpen,
    isMobile,
  }).classes;
 
  return (
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      onClose={onClose}
      onOpen={onOpen}
      swipeAreaWidth={30}
      disableBackdropTransition={true}
    >
      <List className={classes.list}>
        <div className={classes.toolbar} />
        <StyledMenuItem onClick={onClose} component={RouterLink} to="/">
          <ListItemIcon>
            <WelcomeIcon />
          </ListItemIcon>
          <ListItemText primary="Welcome" />
        </StyledMenuItem>
        <StyledMenuItem onClick={onClose} component={RouterLink} to="/Page-1">
          <ListItemIcon>
            <JSIcon />
          </ListItemIcon>
          <ListItemText primary="Page 1" />
        </StyledMenuItem>
        <StyledMenuItem onClick={onClose} component={RouterLink} to="/Page-2">
          <ListItemIcon>
            <ReactIcon />
          </ListItemIcon>
          <ListItemText primary="Page 2" />
        </StyledMenuItem>
        <StyledMenuItem onClick={onClose} component={RouterLink} to="/Page-3">
          <ListItemIcon>
            <GithubIcon />
          </ListItemIcon>
          <ListItemText primary="Page 3" />
        </StyledMenuItem>
        <StyledMenuItem onClick={onClose} component={RouterLink} to="/page-4">
          <ListItemIcon>
            <BugIcon />
          </ListItemIcon>
          <ListItemText primary="Page 4" />
        </StyledMenuItem>
      </List>
    </SwipeableDrawer>
  );
}

export default Menu;
