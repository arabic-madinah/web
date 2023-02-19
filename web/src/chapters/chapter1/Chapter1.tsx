import React from "react";
import Container from "@material-ui/core/Container";
import {Switch} from "react-router";
import {useRouteMatch} from "react-router-dom";
import {Chapter} from "../../chapters";
import {LessonQuery} from "../LessonQuery";
import {WithStyles} from "@material-ui/core";
import {styles} from "../../styles";

export interface ChapterProps extends WithStyles<typeof styles> {
    query: URLSearchParams,
    chapter: Chapter,
}

export function Chapter1({query, chapter, classes}: ChapterProps) {
    const { path } = useRouteMatch();
    return (
        <Container maxWidth={"md"}>
            <Switch>
                <LessonQuery query={query} path={path} chapter={chapter} classes={classes}/>
            </Switch>
        </Container>
    );
}
