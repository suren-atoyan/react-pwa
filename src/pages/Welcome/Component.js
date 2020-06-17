import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { FaReact as ReactIcon } from 'react-icons/fa';

import Meta from 'components/Meta';

import useStyles from './styles';

function Welcome() {
  const matchSmallScreen = useMediaQuery('(max-width: 600px)');
  const classes = useStyles({ isSmallScreen: matchSmallScreen });

  return (
    <>
      <Meta
        title="Welcome"
        description="Welcome to React PWA"
      />
      <Container maxWidth="sm" className={classes.root}>
        <Box className={classes.wrapper}>
          <Box className={classes.iconBox}><ReactIcon className={classes.icon} /></Box>
          <Typography
            variant={matchSmallScreen ? 'h4' : 'h3'}
            className={classes.title}
          >
            React PWA
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default Welcome;
