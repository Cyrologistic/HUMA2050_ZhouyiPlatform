// src/components/HexagramGuide.tsx
import React from 'react';
import { hexagrams } from '../data/hexagrams';
import './HexagramGuide.css';

const HexagramGuide: React.FC = () => {
  return (
    <div className="hexagram-guide">
      <h2>Hexagram Guide</h2>
      <div className="hexagram-list">
        {hexagrams.map((hexagram) => (
          <div key={hexagram.number} className="hexagram-card">
            <h3>
              {hexagram.number}. {hexagram.name} ({hexagram.chineseName})
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
            <p>{hexagram.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HexagramGuide;