import {ActionCreator} from "redux";
import {CompleteLessonAction, UncompleteLessonAction, ClearProgressAction} from "./types";

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