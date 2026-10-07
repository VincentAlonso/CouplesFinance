export type PartnerId = 'A' | 'B'

export interface Partner {
    id: PartnerId; //A | B
    name: string; //partners name
    section_answers: Record<number, string | number[]>; //section id, answers in question order
}

export interface Section {
    id: number; //section number
    title: string;
    info: string[]; //information slides, in order of appearance
    questions: string[]; //questions, in order of appearance
}