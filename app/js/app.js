import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import AppRoot from './components/AppRoot';
import Home from './components/Home';
import Login from './components/Login';
import DonationList from './components/DonationList';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={AppRoot}>
            <IndexRoute component={Home}/>
            <Route path="login">
                <IndexRoute component={Login}/>
            </Route>
            <Route path="donations">
                <IndexRoute component={DonationList}/>
            </Route>
        </Route>
    </Router>,
    document.getElementById('app-root')
);
