import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Navigator from './components/Navigator';
import Error from './components/Error';
import './styles/index.css';;

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/navigator" component={Navigator} />
            <Route exact path="/*" component={Error} />
        </Switch>
    </Router>, document.getElementById('root'));

registerServiceWorker();
