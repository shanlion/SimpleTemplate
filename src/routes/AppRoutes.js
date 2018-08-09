import React from 'react';
import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

// import App from "src/views/App";
import {Dashboard} from "src/layouts";
import NormalLogin from "src/views/Login";

function AppRoutes() {
    return (
        <Switch>
            <Redirect
                from='/'
                to='/NormalLogin'
                exact
            />
            <Route
                path="/NormalLogin"
                component={NormalLogin}
            />
            <Route
                path="/dashboard"
                component={Dashboard}
            />
        </Switch>
    );
}

export default AppRoutes;
