import {useLocation, useRouteMatch} from "react-router-dom";
import {Route, Switch} from "react-router";
import React from "react";
import { ChapterWrapper } from "./ChapterWrapper";

export function useQuery() {
    return new URLSearchParams(useLocation().search);
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


