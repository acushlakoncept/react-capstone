import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router';
import App from './pages/App';
import Stock from './pages/DetailPage';

const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <Route exact path="/:ticker" component={Stock} />
    <Route path="/" component={App} />
  </Router>
);

export default Routes;
