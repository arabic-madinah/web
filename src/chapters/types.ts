
export interface Lesson {
    title: string,
    index: number
}

export interface Chapter {
    title: string,
    index: number,
    lessons: Lesson[]
}

export const chapters: Chapter[] = [
    {
        title: "Introduction",
        index: 1,
        lessons: [
            {
                title: "Parts of Speech",
                index: 1,
            },
            {
                title: "Definiteness of Nouns",
                index: 2
            },
            {
                title: "Nouns Decline",
                index: 3
            }
        ]
    }
];
