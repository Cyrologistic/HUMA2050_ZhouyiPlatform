import React, { useState } from 'react';
import { LineType } from '../types/iching';
import { generateLine, createHexagram } from '../utils/iching';
import './ManualInput.css';

interface ManualInputProps {
  onComplete: (hexagram: ReturnType<typeof createHexagram>) => void;
}

const ManualInput: React.FC<ManualInputProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<LineType[]>([]);
  const [tosses, setTosses] = useState<number[]>([0, 0, 0]); // 2 = tails, 3 = heads

  const handleTossChange = (index: number, value: number) => {
    const newTosses = [...tosses];
    newTosses[index] = value;
    setTosses(newTosses);
  };

  const handleSubmit = () => {
    if (lines.length < 6) {
      const newLine = generateLine(tosses);
      const updatedLines = [...lines, newLine];
      setLines(updatedLines);
      setTosses([0, 0, 0]); // Reset for next line

      if (updatedLines.length === 6) {
        const hexagram = createHexagram(updatedLines);
        onComplete(hexagram);
      }
    }
  };

  return (
    <div className="manual-input">
      <h2>Manual Coin Toss</h2>
      <p>Line {lines.length + 1} of 6</p>
      <div className="toss-inputs">
        {[0, 1, 2].map((index) => (
          <select
            key={index}
            value={tosses[index]}
            onChange={(e) => handleTossChange(index, parseInt(e.target.value))}
            disabled={lines.length === 6}
          >
            <option value={0}>Select</option>
            <option value={2}>Tails (2)</option>
            <option value={3}>Heads (3)</option>
          </select>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={lines.length === 6 || tosses.includes(0)}
      >
        Submit Line
      </button>
      <div className="lines-preview">
        {lines.map((line, index) => (
            <div key={index} className={`line ${line}`}></div>
        ))}
      </div>
    </div>
  );
};

export default ManualInput;