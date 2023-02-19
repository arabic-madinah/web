import { Action } from "redux";
import {Chapter, Section} from "../../chapters";

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
    chapters: ChapterState[],
    currentChapter: Chapter,
    currentSection: Section,
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

export interface SetCurrentChapterAction extends Action {
    type: "SET_CURRENT_CHAPTER",
    payload: {
        chapter: Chapter
    }
}

export interface SetCurrentSectionAction extends Action {
    type: "SET_CURRENT_SECTION",
    payload: {
        section: Section
    }
}

export type ProgressActions = CompleteLessonAction | UncompleteLessonAction | ClearProgressAction | SetCurrentChapterAction | SetCurrentSectionAction;
