import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Main from '~/pages/Main';

const NoMatchPage = () => {
  return <h3>Página não encontrada</h3>;
};

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/main" component={Main} isPrivate />
      <Route component={NoMatchPage} />
    </Switch>
  );
}
