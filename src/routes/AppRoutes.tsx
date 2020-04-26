import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from '../views/Home';
import DefaultLayout from '../layouts/DefaultLayout';
import { LayoutRoute } from '../libs/router';

const AppRoutes: React.FC = () => (
  <Router>
    <Switch>
      <LayoutRoute exact path="/" layout={DefaultLayout} element={<Home />} />
    </Switch>
  </Router>
);

export default AppRoutes;
