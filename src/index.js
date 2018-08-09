import React from 'react';
import ReactDOM from 'react-dom';

import {
    // BrowserRouter as Router,
    HashRouter as Router,
} from "react-router-dom";

import {AppRoutes} from "src/routes";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <AppRoutes/>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
