import {ActionCreator} from "redux";
import {
    CompleteLessonAction,
    UncompleteLessonAction,
    ClearProgressAction,
    SetCurrentSectionAction,
    SetCurrentChapterAction
} from "./types";
import {Chapter, Section} from "../../chapters";

export const completeLesson: ActionCreator<CompleteLessonAction> = (chapterIndex: number, sectionIndex: number) => ({
    type: "COMPLETE_LESSON",
    payload: {
        chapterIndex,
        sectionIndex,
    }
});

export const uncompleteLesson: ActionCreator<UncompleteLessonAction> = (chapterIndex: number, sectionIndex: number) => ({
    type: "UNCOMPLETE_LESSON",
    payload: {
        chapterIndex,
        sectionIndex,
    }
})

export const clearProgress: ActionCreator<ClearProgressAction> = () => ({
    type: "CLEAR_PROGRESS"
});

export const setCurrentChapter: ActionCreator<SetCurrentChapterAction> = (chapter: Chapter) => ({
    type: "SET_CURRENT_CHAPTER",
    payload: {
        chapter
    }
});

export const setCurrentSection: ActionCreator<SetCurrentSectionAction> = (section: Section) => ({
    type: "SET_CURRENT_SECTION",
    payload: {
        section
    }
});