import React from 'react';

import Page from 'components/Page';

import {
  Switch,
  Route,
} from 'react-router-dom';

import routes from 'routes';

function Content() {
  return (
    <Page>
      <Switch>
        {routes.map(route => <Route {...route} key={route.path || '#'}/>)}
      </Switch>
    </Page>
  );
}

export default Content;
