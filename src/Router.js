import React from 'react';
import { Switch, Route } from 'react-router';
import Listing from './containers/Listing';
import Details from './containers/Details';
import Login from './containers/Login';
import Add from './containers/Add';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Listing} />
            <Route path="/details/:id" component={Details} />
            <Route path="/login" component={Login} />
            <Route path="/add" component={Add} />
        </Switch>
    );
};

export default Router;