import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Profile from '../views/Profile';
import Dashboard from '../views/Dashboard';
import Posts from '../views/Posts';

const router = () => (
        <Switch>
            <Route exact path="/">
                <Dashboard />
            </Route>
            <Route exact path="/profile">
                <Profile />
            </Route>
            <Route exact path="/posts">
                <Posts />
            </Route>
        </Switch>
);

export default router;