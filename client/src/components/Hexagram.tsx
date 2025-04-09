import React from 'react';
import { Hexagram } from '../types/iching';
import './Hexagram.css';

interface HexagramProps {
  hexagram: Hexagram;
}

const HexagramDisplay: React.FC<HexagramProps> = ({ hexagram }) => {
  return (
    <div className="hexagram">
      <h2>Hexagram {hexagram.number}: {hexagram.name}</h2>
      <div className="lines">
        {hexagram.lines.map((line, index) => (
          <div
            key={index}
            className={`line ${line}`}
            title={line.includes('changing') ? 'Changing Line' : ''}
          ></div>
        ))}
      </div>
      <p>{hexagram.description}</p>
    </div>
  );
};

export default HexagramDisplay;