import React from 'react';

import { SnackbarProvider } from 'notistack';

import Notifier from './Notifier';

import { notifications } from 'config';

function Notifications() {
  return (
    <SnackbarProvider maxSnack={notifications.maxSnack}>
      <Notifier />
    </SnackbarProvider>
  );
}

export default Notifications;
