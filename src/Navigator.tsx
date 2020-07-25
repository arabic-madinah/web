import React from "react";
import {Route, Switch} from "react-router";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Chapters from "./chapters/Chapters";
import Routes from "./routes/routes";

export function Navigator({classes}: any) {
    return (
        <Switch>
            <Route exact path={Routes.Home} component={Home} />
            <Route path={Routes.Learn} component={Chapters} />
            <Route exact path={Routes.About} component={About} />
            <Route exact path={Routes.Contact} component={Contact} />
        </Switch>
    )
}
