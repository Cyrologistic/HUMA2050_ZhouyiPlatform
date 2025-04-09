export type LineType = 'young_yin' | 'young_yang' | 'old_yin' | 'old_yang';

export interface Hexagram {
    lines: LineType[];
    number: number;
    name: string;
    chineseName: string;
    image?: string;
    description: string;
}