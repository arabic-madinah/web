import React from "react";
import { Chapter1 } from "./chapter1/Chapter1";
import { chapters } from "../chapters";

export type ChapterQueryProps = {
    query: URLSearchParams,
}

export function ChapterQuery({ query }: ChapterQueryProps) {
    switch (query.get("chapter")) {
        default:
        case chapters[0].index.toString(): {
            return <Chapter1 query={query} chapter={chapters[0]} />;
        }
    }
}
