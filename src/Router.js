import React from 'react'
import { Switch, Route } from 'react-router'
import Listing from './components/Listing'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Listing} />
        </Switch>
    );
};

export default Router;