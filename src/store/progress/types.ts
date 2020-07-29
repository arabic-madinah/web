import { Action } from "redux";
import { chapters } from "../../chapters";

interface LessonState {
    index: number
    completed: boolean
}

interface ChapterState {
    index: number
    lessons: LessonState[]
}

export interface ProgressState {
    chapters: ChapterState[]
}

export interface CompleteLessonAction extends Action {
    type: "COMPLETE_LESSON",
    payload: {
        chapterIndex: number,
        lessonIndex: number,
    }
}

export interface UncompleteLessonAction extends Action {
    type: "UNCOMPLETE_LESSON";
    payload: {
        chapterIndex: number,
        lessonIndex: number
    }
}

export interface ClearProgressAction extends Action {
    type: "CLEAR_PROGRESS"
}

export type ProgressActions = CompleteLessonAction | UncompleteLessonAction | ClearProgressAction;
