import React from "react";
import { Chapter1 } from "./chapter1/Chapter1";
import { chapters } from "../chapters";
import {WithStyles} from "@material-ui/core";
import { styles } from "../styles";
import {useDispatch} from "react-redux";
import {setCurrentChapter} from "../store/progress/actions";

export interface ChapterQueryProps extends WithStyles<typeof styles> {
    query: URLSearchParams,
}

export function ChapterQuery({ query, classes }: ChapterQueryProps) {
    const dispatch = useDispatch();

    switch (query.get("chapter")) {
        default:
        case chapters[0].index.toString(): {
            dispatch(setCurrentChapter(chapters[0]));
            return <Chapter1 query={query} chapter={chapters[0]} classes={classes}/>;
        }
    }
}
