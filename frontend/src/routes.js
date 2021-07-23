import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
export default function Routes(){
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/dashboard" exact component={Dashboard}/>
            </Switch>
        </Router>
    );
}
