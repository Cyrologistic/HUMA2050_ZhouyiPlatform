import React, { useState, useEffect } from 'react';
import { LineType } from '../types/iching';
import { generateLine, createHexagram } from '../utils/iching';
import './CoinFlip.css';

interface CoinFlipProps {
  onComplete: (hexagram: ReturnType<typeof createHexagram>) => void;
}

const CoinFlip: React.FC<CoinFlipProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<LineType[]>([]);
  const [allTosses, setAllTosses] = useState<(2 | 3)[][]>([]); // Array of tosses for each line
  const [isFlipping, setIsFlipping] = useState(false);

  const handleFlip = () => {
    if (lines.length < 6 && !isFlipping) {
      setIsFlipping(true);
      const tosses = Array(3)
        .fill(0)
        .map(() => (Math.random() < 0.5 ? 2 : 3) as 2 | 3);

      // Add tosses immediately, but results show after animation
      setAllTosses([...allTosses, tosses]);

      setTimeout(() => {
        const newLine = generateLine(tosses);
        const updatedLines = [...lines, newLine];
        setLines(updatedLines);
        setIsFlipping(false);

        if (updatedLines.length === 6) {
          const hexagram = createHexagram(updatedLines);
          onComplete(hexagram);
        }
      }, 1000); // Matches animation duration
    }
  };

  return (
    <div className="coin-flip">
      <h2>Flip Coins</h2>
      <p>Toss {lines.length + 1} of 6</p>
      <button onClick={handleFlip} disabled={lines.length === 6 || isFlipping}>
        {isFlipping ? 'Flipping...' : 'Flip Coins'}
      </button>
      <div className="toss-history">
        {allTosses.map((tosses, lineIndex) => (
          <div key={lineIndex} className="toss-row">
            <span>Line {lineIndex + 1}: </span>
            <div className="coin-container">
              {tosses.map((result, coinIndex) => (
                <div
                  key={coinIndex}
                  className={`coin ${
                    lineIndex === allTosses.length - 1 && isFlipping
                      ? 'flipping'
                      : result === 3
                      ? 'heads'
                      : 'tails'
                  }`}
                >
                  {lineIndex === allTosses.length - 1 && isFlipping
                    ? ''
                    : result === 3
                    ? 'Heads'
                    : 'Tails'}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="lines-preview">
        {lines.map((line, index) => (
          <div key={index} className={`line ${line}`}></div>
        ))}
      </div>
    </div>
  );
};

export default CoinFlip;