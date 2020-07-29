import React from "react";
import { Introduction } from "./chapter1/lessons/Introduction";
import NextPrevPagination from "../components/NextPrevPagination";
import { NounsDecline } from "./chapter1/lessons/NounsDecline";
import { Chapter } from "../chapters";
import { useDispatch } from "react-redux";
import { completeLesson } from "../store/progress/actions";
import { DemonstrativePronounThis } from "./chapter1/lessons/DemonstrativePronounThis";

type LessonWrapperProps = {
    query: URLSearchParams;
    path: string;
    chapter: Chapter;
};
export function LessonWrapper({ query, path, chapter }: LessonWrapperProps) {
    const dispatch = useDispatch();

    const complete = (chapterIndex: number, lessonIndex: number) => {
        dispatch(completeLesson(chapterIndex, lessonIndex));
    };

    switch (query.get("lesson")) {
        default:
        case chapter.lessons[0].index.toString():
        case chapter.lessons[1].index.toString():
            return (<div>
                <Introduction />
                <NextPrevPagination
                    forwardRoute={`${path}?chapter=${query.get('chapter')}&lesson=3`}
                    forwardName={`1.3 nouns decline`}
                    completeCurrent={() => {
                        complete(1, 1);
                        complete(1, 2);
                    }} />
            </div>);
        case chapter.lessons[2].index.toString():
            return (<div>
                <NounsDecline />
                <NextPrevPagination
                    forwardRoute={`${path}?chapter=${query.get('chapter')}&lesson=4`}
                    forwardName={`1.4 Demonstrative Pronoun 'THIS'`}
                    backwardName={`1.1 Parts of Speech`}
                    backwardRoute={`${path}?chapter=${query.get('chapter')}&lesson=1`}
                    completeCurrent={() => {
                        complete(1, 3);
                    }}
                />
            </div>
            );
        case chapter.lessons[3].index.toString():
            return (<div>
                <DemonstrativePronounThis />
            </div>)
    }
}
