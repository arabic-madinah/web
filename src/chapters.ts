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

export interface Sections {
    [key: number]: Section
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
            }
        ]
    }
];

