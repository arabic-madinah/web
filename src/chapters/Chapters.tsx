import {useLocation, useRouteMatch} from "react-router-dom";
import {Route, Switch} from "react-router";
import React from "react";
import { ChapterQuery } from "./ChapterQuery";
import {WithStyles} from "@material-ui/core";
import {styles} from "../styles";

export function useQuery() {
    return new URLSearchParams(useLocation().search);
}

interface Props extends WithStyles<typeof styles> {

}

export default function Chapters({classes}: Props) {
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


