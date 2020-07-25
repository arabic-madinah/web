import {useLocation, useRouteMatch} from "react-router-dom";
import {Route, Switch} from "react-router";
import React from "react";
import {Chapter1} from "./chapter1/Chapter1";
import {chapters} from "./types";

export function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export type ChapterWrapperProps = {
    query: URLSearchParams,
}


function ChapterWrapper({query}: ChapterWrapperProps) {
    if (query.get("chapter")===chapters[0].index.toString()){
        return <Chapter1 query={query} chapter={chapters[0]}/>
    }
    return null;
}

export default function Chapters() {
    const {path} = useRouteMatch();
    const query = useQuery();
    return (
        <>
            <main>
                <Switch>
                    <Route path={path}>
                        <ChapterWrapper query={query} />
                    </Route>
                </Switch>
            </main>
        </>
    )
}


