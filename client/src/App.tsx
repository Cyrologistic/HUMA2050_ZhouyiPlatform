import React, { useState } from 'react';
import HexagramDisplay from './components/Hexagram';
import CoinFlip from './components/CoinFlip';
import ManualInput from './components/ManualInput';
import './App.css';

const App: React.FC = () => {
  const [mode, setMode] = useState<'manual' | 'website' | null>(null);
  const [hexagram, setHexagram] = useState<ReturnType<typeof import('./utils/iching').createHexagram> | null>(null);

  const handleModeSelect = (selectedMode: 'manual' | 'website') => {
    setMode(selectedMode);
    setHexagram(null); // Reset hexagram when switching modes
  };

  const handleHexagramComplete = (newHexagram: ReturnType<typeof import('./utils/iching').createHexagram>) => {
    setHexagram(newHexagram);
  };

  const handleReset = () => {
    setMode(null);
    setHexagram(null);
  };

  return (
    <div className="app">
      <h1>I Ching Prediction</h1>
      {!mode && !hexagram && (
        <div className="mode-selection">
          <button onClick={() => handleModeSelect('manual')}>
            Manual Input
          </button>
          <button onClick={() => handleModeSelect('website')}>
            Website Coin Flip
          </button>
        </div>
      )}
      {mode === 'manual' && !hexagram && (
        <ManualInput onComplete={handleHexagramComplete} />
      )}
      {mode === 'website' && !hexagram && (
        <CoinFlip onComplete={handleHexagramComplete} />
      )}
      {hexagram && (
        <>
          <HexagramDisplay hexagram={hexagram} />
          <button onClick={handleReset}>Start Over</button>
        </>
      )}
    </div>
  );
};

export default App;