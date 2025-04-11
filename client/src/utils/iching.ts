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

export const binaryToHexagramNumber: number[] = [
  2,  23,  8,  20,  16,  35,  45,  12, // 0-7
  15,  52,  39,  53,  62,  56,  31,  33, // 8-15
  7,  4,   29,  59,  40,  64,  47,  6,  // 16-23
  46,  18,  48,  57,  32,  50,  28,  44, // 24-31
  24,  27,  3,   42,  51,  21,  17,  25, // 32-39
  36,  22,  63,  37,  55,  30,  49,  13, // 40-47
  19,  41,  60,  61,  54,  38,  58,  10, // 48-55
  11,  26,  5,   9,   34,  14,  43,  1   // 56-63
];
  
// export const createHexagram = (lines: LineType[]): Hexagram => {
//     // Calculate binary value for hexagram number
//     const binary = lines
//       .map((line) => (line.includes('yang') ? '1' : '0'))
//       .reverse()
//       .join('');
//     const number = parseInt(binary, 2) + 1; // Hexagram numbers are 1-64
  
//     // Look up hexagram data
//     const hexagramData = hexagrams.find((h) => h.number === number) || {
//       number,
//       name: 'Unknown',
//       chineseName: '',
//       description: 'No description available',
//       image: undefined,
//     };
  
//     return {
//       number,
//       name: hexagramData.name,
//       description: hexagramData.description,
//       lines,
//       chineseName: hexagramData.chineseName,
//       image: hexagramData.image,
//     };
// };

// export const createHexagram = (lines: LineType[]): Hexagram => {
//   const binary = lines.map(line => (line.includes('yang') ? 1 : 0)).join('');
//   const hexagramNumber = parseInt(binary, 2) + 1; // Convert binary to decimal and adjust to 1-64
//   const hexagramData = hexagrams[hexagramNumber - 1]; // Access hexagram data (0-based index)

//   return {
//     number: hexagramNumber,
//     name: hexagramData.name,
//     chineseName: hexagramData.chineseName,
//     description: hexagramData.description,
//     lines,
//     image: hexagramData.image,
//     lineInterpretations: hexagramData.lineInterpretations, // Include line-specific interpretations
//   };
// };

export const createHexagram = (lines: LineType[]): Hexagram => {
  console.log('createHexagram called with lines:', lines);
  if (lines.length !== 6) {
    throw new Error(`Invalid number of lines: expected 6, got ${lines.length}`);
  }
  
  const binary = lines.map(line => (line.includes('yang') ? 1 : 0)).join('');
  const binaryNumber = parseInt(binary, 2) + 1; ; 
  console.log('binary number calculated:', binaryNumber);
  const hexagramNumber = binaryToHexagramNumber[binaryNumber-1];
  console.log('King Wen Number calculated:', hexagramNumber);
  // Inserted placeholder in data, becomes 1-indexed
  const hexagramData = hexagrams[hexagramNumber]; 
  console.log('Hexagram data retrieved:', hexagramData);

  if (!hexagramData) {
    throw new Error(`Hexagram data not found for number ${hexagramNumber}`);
  }

  return {
    number: hexagramNumber,
    name: hexagramData.name,
    chineseName: hexagramData.chineseName,
    description: hexagramData.description,
    lines,
    image: hexagramData.image,
    lineInterpretations: hexagramData.lineInterpretations,
  };
};