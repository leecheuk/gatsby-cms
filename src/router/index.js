import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Profile from '../views/Profile';
import Page2 from '../views/Page2';

const router = () => (
        <Switch>
            <Route exact path="/">
                <Profile />
            </Route>
            <Route exact path="/page2">
                <Page2 />
            </Route>
        </Switch>
);

export default router;