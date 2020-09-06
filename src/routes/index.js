import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import Login from '../pages/Login'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />

        <Route path="/" component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
}
