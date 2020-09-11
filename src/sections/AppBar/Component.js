import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import DividerMU from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

import {
  FaBrush as BrushIcon,
  FaRedo as RedoIcon,
  FaBars as MenuIcon,
  FaGithub as GithubIcon,
} from 'react-icons/fa';

import Link from 'components/Link';

import useTheme from 'store/theme';
import useSW from 'store/sw';

import { title, repository } from 'config';

import useStyles from './styles';

const Divider = withStyles({
  root: {
    'margin-left': 7,
    'margin-right': 7,
  },
})(props => <DividerMU flexItem orientation="vertical" {...props} />);

function AppBar_({ onMenuOpen }) {
  const classes = useStyles();
  const [, themeActions] = useTheme();
  const [swState, swActions] = useSW();

  function handleToggleTheme() {
    themeActions.toggle();
  }

  function handleAppUpdate() {
    swActions.update();
  }

  return (
    <AppBar
      position="absolute"
      className={classes.appBar}
      color="transparent"
      elevation={1}
    >
      <Toolbar className={classes.toolbar}>
        <Box display="flex" className={classes.main}>
          <IconButton
            edge="start"
            aria-label="open menu"
            onClick={onMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <Button aria-label="go to home" className={classes.title}>
              {title}
            </Button>
          </Link>
        </Box>
        <Box display="flex">
          {
            swState.isUpdated && (
              <>
                <Tooltip title="The application has newer version; press to update" arrow>
                  <IconButton aria-label="update the application" color="secondary" onClick={handleAppUpdate}>
                    <RedoIcon />
                  </IconButton>
                </Tooltip>
                <Divider />
              </>
            )
          }
          <Tooltip title="It's open source" arrow>
            <IconButton
              aria-label="go to github page"
              component="a"
              target="_blank"
              rel="noreferrer"
              href={repository}
            >
              <GithubIcon /> 
            </IconButton>
          </Tooltip>
          <Divider />
          <Tooltip title="Change theme" arrow>
            <IconButton
              aria-label="toggle theme"
              edge="end"
              onClick={handleToggleTheme}
            >
              <BrushIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default AppBar_;
