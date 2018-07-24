import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import HomePage from './components/Homepage'
import PlayerDetail from './components/PlayerDetail';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
        <div>
            <Route exact path='/' component={HomePage} />
            <Route path='/players/:id/:name' component={PlayerDetail} />
        </div>
    </HashRouter>
    , document.getElementById('root'));
registerServiceWorker();
