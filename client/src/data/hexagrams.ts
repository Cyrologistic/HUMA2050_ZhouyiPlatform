export interface HexagramData {
    number: number;
    name: string;
    chineseName: string;
    description: string;
    image?: string; // Optional path or URL to an image
}
  
// src/data/hexagrams.ts
export const hexagrams = [
    {
      number: 1,
      name: 'Qian',
      chineseName: '乾',
      description: '乾为天，象征刚健、积极、创造力。建议保持自信和主动，但需注意避免过于刚硬。',
      image: '/images/hexagrams/1.png',
      lineInterpretations: [
        '初九：潜龙勿用。时机未到，需耐心等待，积蓄力量。', // Line 1
        '九二：见龙在田，利见大人。时机渐成熟，可寻求贵人帮助。', // Line 2
        '九三：君子终日乾乾，夕惕若厉，无咎。需保持警惕，努力不懈。', // Line 3
        '九四：或跃在渊，无咎。可进可退，灵活应对。', // Line 4
        '九五：飞龙在天，利见大人。大展宏图，事业有成。', // Line 5
        '上九：亢龙有悔。物极必反，需谦虚谨慎，避免骄傲。', // Line 6
      ],
    },
  ];