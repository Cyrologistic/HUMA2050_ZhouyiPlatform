export type LineType = 'young_yin' | 'young_yang' | 'old_yin' | 'old_yang';

export interface Hexagram {
    number: number;
    name: string;
    chineseName: string;
    description: string;
    lines: LineType[];
    image?: string;
    lineInterpretations: string[]; // Array of 6 strings for line-specific interpretations
  }