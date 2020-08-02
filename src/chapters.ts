type SectionIndex = number;

export interface Section {
    readonly title: string,
    readonly index: SectionIndex
}

export interface Chapter {
    title: string,
    index: number,
    lessons: Section[]
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
            },
            {
                title: "Demonstrative Pronoun 'THIS'",
                index: 4
            },
            {
                title: "Asking Question: 'What is this?'",
                index: 5
            },
            {
                title: "Asking Question: 'Who is this?'",
                index: 6
            },
            {
                title: "Demonstrative Pronoun 'THAT'",
                index: 7
            }
        ]
    }
];
