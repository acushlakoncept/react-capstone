import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router';
import App from './pages/App';
import Stock from './pages/DetailPage';
import NotFound from './pages/NotFound';

const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <Route exact path="/" component={App} />
    <Route exact path="/:ticker" component={Stock} />
    <Route component={NotFound} />
  </Router>
);

export default Routes;
