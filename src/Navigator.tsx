import React from "react";
import {Route, Switch} from "react-router";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Chapters from "./chapters/Chapters";
import Routes from "./routes/routes";
import {WithStyles} from "@material-ui/core";
import {styles} from "./styles";

interface Props extends WithStyles<typeof styles> {

}

export function Navigator({classes}: Props) {
    return (
        <Switch>
            <Route exact path={Routes.Home} component={Home} />
            <Route path={Routes.Learn} render={(props => <Chapters {...props} classes={classes} />)}/>
            <Route exact path={Routes.About} component={About} />
            <Route exact path={Routes.Contact} component={Contact} />
        </Switch>
    )
}
