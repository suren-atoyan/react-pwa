import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { useLocation, Link as RouterLink } from 'react-router-dom';

import Divider from 'components/Divider';
import routes from 'routes';
import useStyles from './styles';

const Page = props => {
  const classes = useStyles();
  const location = useLocation();

  const currentRouteIndex = routes.findIndex(route => route.path === location.pathname);
  const isPrevDisabled = currentRouteIndex === 0;
  const isNextDisabled = currentRouteIndex === routes.length - 2;

  return (
    <Box className={classes.root}>
      <Box>{props.children}</Box>
      <Box>
        <Divider />
        <Box className={classes.stepper}>
          <Button
            disabled={isPrevDisabled}
            startIcon={<FaArrowLeft />}
            component={RouterLink}
            to={!isPrevDisabled && routes[currentRouteIndex - 1].path}
          >{!isPrevDisabled && routes[currentRouteIndex - 1].details.title}</Button>
          <Button
            disabled={isNextDisabled}
            endIcon={<FaArrowRight />}
            component={RouterLink}
            to={!isNextDisabled && routes[currentRouteIndex + 1].path}
          >{!isNextDisabled && routes[currentRouteIndex + 1].details.title}</Button>
         </Box>
      </Box>
    </Box>
  );
};

export default Page;
