import { Action } from "redux";

export interface SectionState {
    index: number
    completed: boolean
}

export interface ChapterState {
    index: number
    lessons: SectionState[],
    completed: boolean
}

export interface ProgressState {
    chapters: ChapterState[]
}

export interface CompleteLessonAction extends Action {
    type: "COMPLETE_LESSON",
    payload: {
        chapterIndex: number,
        sectionIndex: number,
    }
}

export interface UncompleteLessonAction extends Action {
    type: "UNCOMPLETE_LESSON";
    payload: {
        chapterIndex: number,
        sectionIndex: number
    }
}

export interface ClearProgressAction extends Action {
    type: "CLEAR_PROGRESS"
}

export type ProgressActions = CompleteLessonAction | UncompleteLessonAction | ClearProgressAction;
