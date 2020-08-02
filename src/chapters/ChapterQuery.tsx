import React from "react";
import { Chapter1 } from "./chapter1/Chapter1";
import { chapters } from "../chapters";
import {WithStyles} from "@material-ui/core";
import { styles } from "../styles";

export interface ChapterQueryProps extends WithStyles<typeof styles> {
    query: URLSearchParams,
}

export function ChapterQuery({ query, classes }: ChapterQueryProps) {
    switch (query.get("chapter")) {
        default:
        case chapters[0].index.toString(): {
            return <Chapter1 query={query} chapter={chapters[0]} classes={classes}/>;
        }
    }
}
