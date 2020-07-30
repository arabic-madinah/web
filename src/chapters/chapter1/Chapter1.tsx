import React from "react";
import Container from "@material-ui/core/Container";
import {Switch} from "react-router";
import {useRouteMatch} from "react-router-dom";
import {Chapter} from "../../chapters";
import { LessonQuery } from "../LessonQuery";

export type ChapterProps = {
    query: URLSearchParams,
    chapter: Chapter
}

export function Chapter1({query, chapter}: ChapterProps) {
    const { path } = useRouteMatch();
    return (
        <Container maxWidth={"md"}>
            <Switch>
                <LessonQuery query={query} path={path} chapter={chapter}/>
            </Switch>
        </Container>
    );
}
