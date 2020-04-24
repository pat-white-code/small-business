import React from 'react';
import { Switch, Route } from 'react-router';
import Listing from './containers/Listing';
import Details from './components/Details';
import Login from './components/Login';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Listing} />
            <Route path="/details/:id" component={Details} />
            <Route path="/login" component={Login} />
        </Switch>
    );
};

export default Router;