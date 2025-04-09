// src/components/Introduction.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Introduction.css';

const Introduction: React.FC = () => {
  return (
    <div className="introduction">
      <div className="intro-content">
        <h1 className="intro-title">{"PLACEHOLDER"}</h1>
        <p className="intro-description">
          {"PLACEHOLDER"}
        </p>
        <Link to="/coin-flip" className="intro-cta">
          Coin Flip
        </Link>
      </div>
    </div>
  );
};

export default Introduction;