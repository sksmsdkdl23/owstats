import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import HomePage from './components/Homepage'
import PlayerDetail from './components/PlayerDetail';
import Page404 from './components/shared/Page404';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
        <div>
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
                <Route path={process.env.PUBLIC_URL + '/players/:id/:name'} component={PlayerDetail} />
                <Route path='**' component={Page404} />
            </Switch>
        </div>
    </HashRouter>
    , document.getElementById('root'));
registerServiceWorker();
