import React from "react";
import { Introduction } from "./chapter1/lessons/Introduction";
import NextPrevPagination from "../components/NextPrevPagination";
import { NounsDecline } from "./chapter1/lessons/NounsDecline";
import { Chapter, Section, chapters } from "../chapters";
import { useDispatch } from "react-redux";
import {completeLesson, setCurrentSection} from "../store/progress/actions";
import { DemonstrativePronounThis } from "./chapter1/lessons/DemonstrativePronounThis";
import {QuestionWhatIsThis} from "./chapter1/lessons/QuestionWhatIsThis";
import {QuestionWhoIsThis} from "./chapter1/lessons/QuestionWhoIsThis";
import {WithStyles} from "@material-ui/core";
import {styles} from "../styles";
import {DemonstrativePronounThat} from "./chapter1/lessons/DemonstrativePronounThat";

export interface SectionsProps {
    children: React.ReactNode,
    path: string,
    currentLessons: [number, number][],
    prevLesson?: [Chapter, Section] | null,
    nextLesson?: [Chapter, Section] | null,
    complete(chapterIndex: number, lessonIndex: number): void
}

type NavigationProps = {
    backwardRoute?: string,
    backwardName?: string,
    forwardRoute?: string,
    forwardName?: string
}

function Sections({children, path, currentLessons, prevLesson, nextLesson, complete}: SectionsProps) {
    const declareRouteQuery = (c: Chapter, s: Section): [string, string] => {
        const route = `?chapter=${c.index}&lesson=${s.index}`;
        const name = `${c.index}.${s.index} ${s.title}`;
        return [route, name];
    }
    let props: NavigationProps = {};

    if (prevLesson) {
        let [chapter, section] = (prevLesson as [Chapter, Section]);
        const [backwardRoute, backwardName]: [string, string] = declareRouteQuery(chapter, section);
        props = {...props, backwardName, backwardRoute};
    }
    if (nextLesson) {
        let [chapter, section] = (nextLesson as [Chapter, Section]);
        const [forwardRoute, forwardName]: [string, string] = declareRouteQuery(chapter, section);
        props = {...props, forwardName, forwardRoute};
    }
    return (
        <div>
            {children}
            <NextPrevPagination 
                {...props}
                completeCurrent={()=> {
                    for (let lesson of currentLessons) {
                        complete(lesson[0], lesson[1]);
                    }
                }}
            />
        </div>
    )
}

interface LessonQueryProps extends WithStyles<typeof styles> {
    query: URLSearchParams;
    path: string;
    chapter: Chapter;
}

export function LessonQuery({ query, path, chapter, classes }: LessonQueryProps) {
    const dispatch = useDispatch();

    const complete = (chapterIndex: number, lessonIndex: number) => {
        dispatch(completeLesson(chapterIndex, lessonIndex));
    };

    switch (query.get("lesson")) {
        default:
        case chapter.lessons[0].index.toString():
        case chapter.lessons[1].index.toString():
            dispatch(setCurrentSection(chapter.lessons[0]));
            return (
            <Sections path={path} currentLessons={[[1, 1], [1, 2]]} complete={complete} nextLesson={[chapters[0], chapters[0].lessons[2]]}>
                <Introduction classes={classes}/>
            </Sections>);
        case chapter.lessons[2].index.toString():
            dispatch(setCurrentSection(chapter.lessons[2]));
            return (
            <Sections 
            path={path} 
            currentLessons={[[1, 3]]} 
            complete={complete} 
            prevLesson={[chapters[0], chapters[0].lessons[1]]}
            nextLesson={[chapters[0], chapters[0].lessons[3]]}>
                <NounsDecline classes={classes}/>
            </Sections>
            )
        case chapter.lessons[3].index.toString():
            dispatch(setCurrentSection(chapter.lessons[3]));
            return (
                <Sections 
                path={path}
                currentLessons={[[1, 4]]}
                complete={complete}
                prevLesson={[chapters[0], chapters[0].lessons[2]]}
                nextLesson={[chapters[0], chapters[0].lessons[4]]}
                    >
                    <DemonstrativePronounThis classes={classes}/>
                </Sections>
            );
        case chapter.lessons[4].index.toString():
            dispatch(setCurrentSection(chapter.lessons[4]));
            return (
                <Sections
                path={path}
                currentLessons={[[1, 5]]}
                complete={complete}
                prevLesson={[chapters[0], chapters[0].lessons[3]]}
                nextLesson={[chapters[0], chapters[0].lessons[5]]}
                >
                    <QuestionWhatIsThis classes={classes}/>
                </Sections>
            );
        case chapter.lessons[5].index.toString():
            dispatch(setCurrentSection(chapter.lessons[5]));
            return (
                <Sections
                    path={path}
                    currentLessons={[[1, 6]]}
                    complete={complete}
                    prevLesson={[chapters[0], chapters[0].lessons[4]]}
                    nextLesson={[chapters[0], chapters[0].lessons[6]]}
                >
                    <QuestionWhoIsThis classes={classes}/>
                </Sections>
            );
        case chapter.lessons[6].index.toString():
            dispatch(setCurrentSection(chapter.lessons[6]));
            return (
                <Sections
                    path={path}
                    currentLessons={[[1, 7]]}
                    complete={complete}
                    prevLesson={[chapters[0], chapters[0].lessons[5]]}
                >
                    <DemonstrativePronounThat classes={classes} />
                </Sections>
            )
    }
}
