import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Page1 from '../views/Page1';
import Page2 from '../views/Page2';

const router = () => (
        <Switch>
            <Route exact path="/">
                <Page1 />
            </Route>
            <Route exact path="/page2">
                <Page2 />
            </Route>
        </Switch>
);

export default router;