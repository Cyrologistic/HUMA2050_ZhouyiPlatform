// src/components/Header.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">PLACEHOLDER</h1>
        <nav className="header-nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Home
          </NavLink>
          <NavLink
            to="/coin-flip"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Coin Flip
          </NavLink>
          <NavLink
            to="/hexagram-guide"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Hexagram Guide
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;