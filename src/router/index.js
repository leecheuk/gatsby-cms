import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Profile from '../views/Profile';
import Dashboard from '../views/Dashboard';

const router = () => (
        <Switch>
            <Route exact path="/">
                <Dashboard />
        </Route>
        <Route exact path="/profile">
            <Profile />
        </Route>
        </Switch>
);

export default router;