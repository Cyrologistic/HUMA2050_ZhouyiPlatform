import React, { useState } from 'react';
import CoinFlip from './components/CoinFlip';
import ManualInput from './components/ManualInput';
import './App.css';

const App: React.FC = () => {
  const [mode, setMode] = useState<'manual' | 'website' | null>(null);

  const handleModeSelect = (selectedMode: 'manual' | 'website') => {
    setMode(selectedMode);
  };

  const handleHexagramComplete = () => {
    // No reset; CoinFlip manages its own state
  };

  return (
    <div className="app">
      <h1>I Ching Prediction</h1>
      {!mode && (
        <div className="mode-selection">
          <button onClick={() => handleModeSelect('manual')}>
            Manual Input
          </button>
          <button onClick={() => handleModeSelect('website')}>
            Website Coin Flip
          </button>
        </div>
      )}
      {mode === 'manual' && <ManualInput onComplete={handleHexagramComplete} />}
      {mode === 'website' && <CoinFlip onComplete={handleHexagramComplete} />}
    </div>
  );
};

export default App;