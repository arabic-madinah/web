import React from "react";
import {Component} from "react";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import Chapters from "./chapters/chapter1/Chapter1";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import HeaderAppBar from "./components/HeaderAppBar";

export class Navigator extends Component {
    render() {
        return (
            <BrowserRouter>
                <HeaderAppBar />
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
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
