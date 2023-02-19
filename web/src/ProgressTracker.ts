import { ProgressState } from "./store/progress/types";
import { ChapterState, SectionState } from "./store/progress/types";
import {Chapter, Section} from "./chapters";

export class ProgressTracker implements ProgressState{

    chapters: ChapterState[];
    currentChapter: Chapter;
    currentSection: Section;

    constructor(state: ChapterState[], currentChapter: Chapter, currentSection: Section) {
        this.chapters = state;
        this.currentChapter = currentChapter;
        this.currentSection = currentSection;
    }

    checkChapterCompleted(chapterState: ChapterState) {
        return chapterState.lessons.reduce((accumulator, s: SectionState): boolean => accumulator && s.completed, true);
    }

    completeLesson(chapterIndex: number, sectionIndex: number) {
        let chapterQuery: ChapterState | undefined = this.chapters.find((c: ChapterState) => c.index === chapterIndex);
        let sectionQuery: SectionState | undefined = chapterQuery?.lessons.find((s: SectionState) => s.index === sectionIndex);
        if (sectionQuery) {
            (sectionQuery as SectionState).completed = true;
        }
        if (chapterQuery) {
            chapterQuery.completed = (this.checkChapterCompleted(chapterQuery as ChapterState));
        }
    }

    uncompleteLesson(chapterIndex: number, sectionIndex: number) {
        let chapterQuery: ChapterState | undefined = this.chapters.find((c: ChapterState) => c.index === chapterIndex);
        let sectionQuery: SectionState | undefined = chapterQuery?.lessons.find((s: SectionState) => s.index === sectionIndex);
        if (sectionQuery) {
            (sectionQuery as SectionState).completed = false;
        }
        if (chapterQuery) {
            chapterQuery.completed = (this.checkChapterCompleted(chapterQuery as ChapterState));
        }
    }

}