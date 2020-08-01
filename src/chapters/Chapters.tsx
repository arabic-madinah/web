import {useLocation, useRouteMatch} from "react-router-dom";
import {Route, Switch} from "react-router";
import React from "react";
import { ChapterQuery } from "./ChapterQuery";

export function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Chapters({classes}: any) {
    const {path} = useRouteMatch();
    const query = useQuery();
    return (
        <>
            <main>
                <Switch>
                    <Route path={path}>
                        <ChapterQuery query={query} classes={classes} />
                    </Route>
                </Switch>
            </main>
        </>
    )
}


