import { LineType, Hexagram } from "../types/iching";
import { hexagrams } from '../data/hexagrams';


export const generateLine = (tosses: number[]): LineType => {
    const sum = tosses.reduce((acc, val) => acc + val, 0);
    switch (sum) {
      case 6:
        return 'old_yin'; 
      case 7:
        return 'young_yang';
      case 8:
        return 'young_yin';
      case 9:
        return 'old_yang';
      default:
        return 'old_yin'; // Fallback, should not occur
    }
};
  
export const createHexagram = (lines: LineType[]): Hexagram => {
    // Calculate binary value for hexagram number
    const binary = lines
      .map((line) => (line.includes('yang') ? '1' : '0'))
      .reverse()
      .join('');
    const number = parseInt(binary, 2) + 1; // Hexagram numbers are 1-64
  
    // Look up hexagram data
    const hexagramData = hexagrams.find((h) => h.number === number) || {
      number,
      name: 'Unknown',
      chineseName: '',
      description: 'No description available',
      image: undefined,
    };
  
    return {
      number,
      name: hexagramData.name,
      description: hexagramData.description,
      lines,
      chineseName: hexagramData.chineseName,
      image: hexagramData.image,
    };
};