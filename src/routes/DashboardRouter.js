import React from 'react';
import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Option1 from "src/views/Option1";
import Option2 from "src/views/Option2";
import Tom from "src/views/User/Tom";
import Bill from "src/views/User/Bill";
import Alex from "src/views/User/Alex";
import Team1 from "src/views/Team/Team1";
import Team2 from "src/views/Team/Team2";
import File from "src/views/File";

function DashboardRouter({match}) {
    return (
        <Switch>
            <Redirect
                from={match.url}
                to={`${match.url}/option1`}
                exact
            />
            <Route
                path={`${match.url}/option1`}
                component={Option1}
            />
            <Route
                path={`${match.url}/option2`}
                component={Option2}
            />
            <Route
                path={`${match.url}/tom`}
                component={Tom}
            />
            <Route
                path={`${match.url}/bill`}
                component={Bill}
            />
            <Route
                path={`${match.url}/alex`}
                component={Alex}
            />
            <Route
                path={`${match.url}/team1`}
                component={Team1}
            />
            <Route
                path={`${match.url}/team2`}
                component={Team2}
            />
            <Route
                path={`${match.url}/file`}
                component={File}
            />
            {/*<Redirect*/}
                {/*path="/not-found"*/}
                {/*component={Page404}*/}
            {/*/>*/}
        </Switch>
    );
}

export default DashboardRouter;
