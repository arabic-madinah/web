import {ActionCreator} from "redux";
import {CompleteLessonAction, UncompleteLessonAction, ClearProgressAction} from "./types";

export const completeLesson: ActionCreator<CompleteLessonAction> = (chapterIndex: number, lessonIndex: number) => ({
    type: "COMPLETE_LESSON",
    payload: {
        chapterIndex,
        lessonIndex,
    }
});

export const uncompleteLesson: ActionCreator<UncompleteLessonAction> = (chapterIndex: number, lessonIndex: number) => ({
    type: "UNCOMPLETE_LESSON",
    payload: {
        chapterIndex,
        lessonIndex,
    }
})

export const clearProgress: ActionCreator<ClearProgressAction> = () => ({
    type: "CLEAR_PROGRESS"
});