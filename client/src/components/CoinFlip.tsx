import React, { useState, useRef, useEffect } from 'react';
import { LineType } from '../types/iching';
import { generateLine, createHexagram } from '../utils/iching';
import './CoinFlip.css';

interface CoinFlipProps {
  onComplete: (hexagram: ReturnType<typeof createHexagram>) => void;
}

const CoinFlip: React.FC<CoinFlipProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<LineType[]>([]);
  const [allTosses, setAllTosses] = useState<(2 | 3)[][]>([]);
  const [isFlipping, setIsFlipping] = useState(false);
  const [hexagram, setHexagram] = useState<ReturnType<typeof createHexagram> | null>(null);
  const hexagramRef = useRef<HTMLDivElement>(null);

  const handleFlip = () => {
    if (lines.length < 6 && !isFlipping) {
      setIsFlipping(true);
      const tosses = Array(3)
        .fill(0)
        .map(() => (Math.random() < 0.5 ? 2 : 3) as 2 | 3);
      setAllTosses([...allTosses, tosses]);

      setTimeout(() => {
        const newLine = generateLine(tosses);
        const updatedLines = [...lines, newLine];
        setLines(updatedLines);
        setIsFlipping(false);

        if (updatedLines.length === 6) {
          const newHexagram = createHexagram(updatedLines);
          setTimeout(() => {
            setHexagram(newHexagram);
            console.log('Hexagram set:', newHexagram);
            onComplete(newHexagram);
          }, 100);
        }
      }, 1000);
    }
  };

  const handleStartOver = () => {
    setLines([]);
    setAllTosses([]);
    setIsFlipping(false);
    setHexagram(null);
  };

  useEffect(() => {
    if (hexagram && hexagramRef.current) {
      hexagramRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hexagram]);

  return (
    <div className="coin-flip">
      <h2>Flip Coins</h2>
      {!hexagram && (
        <p className="toss-instruction">Toss {lines.length + 1} of 6</p>
      )}
      {!hexagram && (
        <button onClick={handleFlip} disabled={lines.length === 6 || isFlipping}>
          {isFlipping ? (
            <span className="flipping-message">
              Flipping
              <span className="spinner"></span>
            </span>
          ) : (
            'Flip Coins'
          )}
        </button>
      )}
      <div className="layout-container">
        <div className="toss-history">
          {allTosses.length === 0 && !hexagram && (
            <p className="start-message">Click "Flip Coins" to begin your reading.</p>
          )}
          {[...allTosses].reverse().map((tosses, index) => {
            const lineNumber = allTosses.length - index;
            return (
              <div key={index} className="toss-row">
                <span>Line {lineNumber}:</span>
                <div className="coin-container">
                  {tosses.map((result, coinIndex) => (
                    <div
                      key={coinIndex}
                      className={`coin ${
                        index === 0 && isFlipping
                          ? 'flipping'
                          : result === 3
                          ? 'heads'
                          : 'tails'
                      }`}
                      data-result={result}
                    ></div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        {hexagram && (
          <div className="hexagram-section visible" ref={hexagramRef}>
            <h3>
              Hexagram {hexagram.number}: {hexagram.chineseName || "PLACEHOLDER"}
            </h3>
            {hexagram.image ? (
              <img
                src={hexagram.image}
                alt={`Hexagram ${hexagram.number}`}
                className="hexagram-image"
              />
            ) : (
              <p className="no-image">No image available</p>
            )}
            <div className="lines">
              {hexagram.lines.map((line, index) => (
                <div
                  key={index}
                  className={`line ${line}`}
                  title={line.includes('changing') ? 'Changing Line' : ''}
                ></div>
              ))}
            </div>
            <div className="description">
              <p>{hexagram.description}</p>
            </div>
          </div>
        )}
        {hexagram && (
          <div className="reserved-section">
            <button className="start-over-button" onClick={handleStartOver}>
              Start Over
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoinFlip;