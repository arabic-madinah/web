import React from "react";
import Container from "@material-ui/core/Container";
import {Introduction} from "./lessons/Introduction";
import NextPrevPagination from "../../components/NextPrevPagination";
import {Switch} from "react-router";
import {useRouteMatch} from "react-router-dom";
import {NounsDecline} from "./lessons/NounsDecline";
import {Chapter} from "../types";

// function LessonComponent({component, path}) {
//     return (
//         <div>
//             <component />
//             <NextPrevPagination
//                 forwardRoute={`${path}`}
//                 />
//         </div>
//     );
// }

export type ChapterProps = {
    query: URLSearchParams,
    chapter: Chapter
}

export function Chapter1({query, chapter}: ChapterProps) {
    const { path } = useRouteMatch();
    return (
        <Container maxWidth={"md"}>
            <Switch>
                <LessonWrapper query={query} path={path} chapter={chapter}/>
            </Switch>
        </Container>
    );
}

type LessonWrapperProps = {
    query: URLSearchParams,
    path: string,
    chapter: Chapter
}


function LessonWrapper({query, path, chapter}: LessonWrapperProps) {

    switch (query.get("lesson")) {
        default:
        case chapter.lessons[0].index.toString():
        case chapter.lessons[1].index.toString():
            return (<div>
                <Introduction />
                <NextPrevPagination forwardRoute={`${path}?chapter=${query.get('chapter')}&lesson=3`} forwardName={`1.3 nouns decline`} />
            </div>);
        case chapter.lessons[2].index.toString():
            return (<div>
                    <NounsDecline />
                </div>
            )
    }
}
