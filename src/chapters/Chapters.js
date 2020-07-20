import {useRouteMatch} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {Switch, Route} from "react-router";
import React from "react";
import {Chapter1} from "./chapter1/Chapter1";

export function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function ChapterComponent({query}) {
    if (query.get("chapter")==="1"){
        return <Chapter1 query={query}/>
    }
    return null;
}

export default function Chapters() {
    const {path} = useRouteMatch();
    const query = useQuery();
    return (
        <Switch>
            <Route path={path}>
                <ChapterComponent query={query} />
            </Route>
        </Switch>
    )
}


