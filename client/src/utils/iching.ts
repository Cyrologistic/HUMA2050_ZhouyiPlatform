import { LineType, Hexagram } from "../types/iching";

// TODO: Add the rest of the hexagrams and their descriptions
const hexagramData: Partial<Hexagram>[] = [
    { number: 1, name: "乾", description: "PLACEHOLDER"},
]

export function generateLine(coinTosses?: number[]): LineType {
    let total: number;
    if (coinTosses) {
        total = coinTosses.reduce((sum, value) => sum + value, 0);
    }
    else {
        total = Array(3)
            .fill(0)
            .reduce((sum) => sum + (Math.random() < 0.5 ? 2 : 3), 0);
    }
    switch (total) {
        case 6:
            return "old_yin";
        case 7:
            return "young_yang";
        case 8:
            return "young_yin";
        case 9:
            return "old_yang";
        default:
            throw new Error("Invalid coin toss result");
    }
}

export function createHexagram(lines: LineType[]): Hexagram {
    if (lines.length !== 6) {
        throw new Error("Hexagram must have exactly 6 lines");
    }
    const binary = lines.map(line => (line.includes('yang') ? 1 : 0)).join('');
    const hexNumber = parseInt(binary, 2) + 1;
    const hexInfo = hexagramData.find(hex => hex.number === hexNumber) || {
        number: hexNumber,
        name: "Unknown",
        description: "No description available",
    };
    return {
        lines,
        number: hexInfo.number ?? 0,
        name: hexInfo.name ?? "Unknown",
        description: hexInfo.description ?? "No description available",
    }
}