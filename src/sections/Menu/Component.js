import React from 'react';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';

import { Link as RouterLink } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import {
  FaHome,
  FaCogs,
  FaReact,
  FaShapes,
  FaWarehouse,
  FaEnvelope,
  FaExclamationTriangle,
  FaSyncAlt,
  FaSearchengin,
  FaSmileWink,
  FaServer,
  FaBoxes,
  FaBalanceScaleLeft,
  FaCheckDouble,
  FaAnchor,
} from 'react-icons/fa';

import routes from 'routes';

import { isMobile } from 'utils';

import useStyles from './styles';

const icons = {
  '/': FaHome,
  '/usage': FaCogs,
  '/cra': FaReact,
  '/mui': FaShapes,
  '/store': FaWarehouse,
  '/notifications': FaEnvelope,
  '/error-handling': FaExclamationTriangle,
  '/service-worker': FaSyncAlt,
  '/seo': FaSearchengin,
  '/no-ie': FaSmileWink,
  '/hoster': FaServer,
  '/structure': FaBoxes,
  '/size': FaBalanceScaleLeft,
  '/audit': FaCheckDouble,
};

const StyledMenuItem = withStyles({ root: { width: '100%' } })(props => <MenuItem {...props} />);

function Menu({ isOpen, onClose, onOpen }) {
  const classes = useStyles({
    isOpen,
    isMobile,
  });
 
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
        {
          routes.filter(route => route.details).map(route => {
            return (
              <StyledMenuItem
                key={route.path}
                onClick={onClose}
                component={RouterLink}
                to={route.path}
              >
                <ListItemIcon>
                  {React.createElement(icons[route.path] || FaAnchor)}
                </ListItemIcon>
                <ListItemText primary={route.details.title} />
              </StyledMenuItem>
            )
          })
        }
      </List>
    </SwipeableDrawer>
  );
}

export default Menu;
