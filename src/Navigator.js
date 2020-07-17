import React from "react";
import {Component} from "react";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import ProminentAppBar from "./components/Header";
import Chapters from "./chapters/chapter1/Chapter1";
import Home from "./Home";
import About from "./About";

export class Navigator extends Component {
    render() {
        return (
            <BrowserRouter>
                <ProminentAppBar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/learn">
                        <Chapters />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
