import React from "react";
import Container from "@material-ui/core/Container";
import {Introduction} from "./lessons/Introduction";
import NextPrevPagination from "../../components/NextPrevPagination";
import {Switch} from "react-router";
import {useRouteMatch} from "react-router-dom";
import {NounsDecline} from "./lessons/NounsDecline";

function LessonComponent({component, path}) {
    return (
        <div>
            <component />
            <NextPrevPagination
                forwardRoute={`${path}`}
                />
        </div>
    );
}

export function Chapter1({query}) {
    const { path } = useRouteMatch();
    return (
        <Container maxWidth={"md"}>
            <Switch>
                <LessonWrapper query={query} path={path}/>
            </Switch>
        </Container>
    );
}

function LessonWrapper({query, path}) {
    switch (query.get("lesson")) {
        default:
        case "1":
        case "2":
            return (<div>
                <Introduction />
                <NextPrevPagination forwardRoute={`${path}?chapter=${query.get('chapter')}&lesson=3`} forwardName={`1.3 nouns decline`} />
            </div>);
        case "3":
            return (<div>
                    <NounsDecline />
                </div>
            )
    }
}
