import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={App}/>
        </Router>
    ), document.getElementById('root')
);
