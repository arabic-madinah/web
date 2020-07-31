import { Reducer } from "redux";
import { ProgressState, ProgressActions, CompleteLessonAction, UncompleteLessonAction } from "./types";
import {chapters} from "../../chapters";
import { ProgressTracker } from "../../ProgressTracker";

export const initialState: ProgressState = {
    chapters: chapters.map(chapter => {
        return {
            index: chapter.index,
            lessons: chapter.lessons.map(lesson => ({index: lesson.index, completed: false})),
            completed: false
        };
})}

const progressTracker = new ProgressTracker(initialState.chapters);

const reducer: Reducer<ProgressState> = (state: ProgressState=initialState, action) => {
    switch ((action as ProgressActions).type) {
        case "COMPLETE_LESSON": {
            let {chapterIndex, sectionIndex} = (action as CompleteLessonAction).payload;
            progressTracker.completeLesson(chapterIndex, sectionIndex);
            return {...state, ...progressTracker.chapters};
        }
        case "UNCOMPLETE_LESSON": {
            let {chapterIndex, sectionIndex} = (action as UncompleteLessonAction).payload;
            let chapters = state.chapters;
            progressTracker.uncompleteLesson(chapterIndex, sectionIndex);
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
