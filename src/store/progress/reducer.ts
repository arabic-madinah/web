import { Reducer } from "redux";
import { ProgressState, ProgressActions, CompleteLessonAction, UncompleteLessonAction } from "./types";
import {chapters} from "../../chapters";

export const initialState: ProgressState = {
    chapters: chapters.map(chapter => {
        return {
            index: chapter.index,
            lessons: chapter.lessons.map(lesson => ({index: lesson.index, completed: false}))
        };
})}

const reducer: Reducer<ProgressState> = (state: ProgressState=initialState, action) => {
    switch ((action as ProgressActions).type) {
        case "COMPLETE_LESSON": {
            let {chapterIndex, lessonIndex} = (action as CompleteLessonAction).payload;
            let chapters = state.chapters;
            const lesson = chapters
                .find(chapter => chapter.index === chapterIndex)?.lessons
                .find(lesson => lesson.index === lessonIndex);
            if (lesson) {
                lesson.completed = true;
            }
            return {...state, chapters};
        }
        case "UNCOMPLETE_LESSON": {
            let {chapterIndex, lessonIndex} = (action as UncompleteLessonAction).payload;
            let chapters = state.chapters;
            const lesson = chapters
                .find(chapter => chapter.index === chapterIndex)?.lessons
                .find(lesson => lesson.index === lessonIndex);
            if (lesson) {
                lesson.completed = false;
            }
            return {...state, chapters};
        }
        case "CLEAR_PROGRESS": {
            return initialState;
        }
        default:
            return state;
    }
}

export default reducer;
