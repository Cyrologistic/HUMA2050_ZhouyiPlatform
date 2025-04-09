export interface HexagramData {
    number: number;
    name: string;
    chineseName: string;
    description: string;
    image?: string; // Optional path or URL to an image
}
  
export const hexagrams: HexagramData[] = [
    {
        number: 1,
        name: 'Qian',
        chineseName: '乾',
        description:
        'PLACEHOLDER',
        image: '/images/hexagrams/1.jpg', // Placeholder path
    },
]