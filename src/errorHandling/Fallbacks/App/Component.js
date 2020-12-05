import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { FaRedo as ResetIcon } from 'react-icons/fa';

import resetApp from 'utils/resetApp';
import { messages, email } from 'config';

import useStyles from './styles';

function AppErrorBoundaryFallback() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h3">
          {messages.app.crash.title}
        </Typography>
        <div className={classes.buttons}>
          <div>
            <Button target="_blank" rel="noreferrer" href={`mailto: ${email}`}>
              {messages.app.crash.options.email}
            </Button>
          </div>
          <Typography component="h6">or</Typography>
          <div>
            <Button onClick={resetApp}>{messages.app.crash.options.reset} <ResetIcon /></Button>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default AppErrorBoundaryFallback;
