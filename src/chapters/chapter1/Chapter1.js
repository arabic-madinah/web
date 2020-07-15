import React from "react";
import Container from "@material-ui/core/Container";
import {Introduction} from "./lessons/Introduction";
import NextPrevPagination from "../../components/NextPrevPagination";
import {Route, Switch} from "react-router";
import {useRouteMatch} from "react-router-dom";
import {NounsDecline} from "./lessons/NounsDecline";

export default function Chapters() {
    let { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={`${path}/chapter1`}>
                <Chapter1 />
            </Route>
        </Switch>
    )
}

export function Chapter1() {
    const { path } = useRouteMatch();

    return (
        <Container maxWidth={"md"}>
            <Switch>
                <Route exact path={`${path}/`}>
                    <Introduction />
                    <NextPrevPagination forwardRoute={`${path}/nouns-decline`} forwardName={`1.3 nouns decline`} />
                </Route>
                <Route exact path={`${path}/nouns-decline`}>
                    <NounsDecline />
                </Route>
            </Switch>
        </Container>

    );
}
