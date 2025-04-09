/* eslint-disable @typescript-eslint/no-explicit-any */
// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Introduction from './components/Introduction';
import CoinFlip from './components/CoinFlip';
import HexagramGuide from './components/HexagramGuide';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  const location = useLocation();

  const handleCoinFlipComplete = (hexagram: any) => {
    console.log('Hexagram generated:', hexagram);
  };

  // Debug log to confirm route changes
  console.log('Current location:', location.pathname);

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route
            path="/coin-flip"
            element={<CoinFlip onComplete={handleCoinFlipComplete} />}
          />
          <Route path="/hexagram-guide" element={<HexagramGuide />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;