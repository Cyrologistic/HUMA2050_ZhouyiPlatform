// src/components/Header.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">周易占卜</h1>
        <nav className="header-nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            首頁
          </NavLink>
          <NavLink
            to="/coin-flip"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            硬幣擲卦
          </NavLink>
          <NavLink
            to="/hexagram-guide"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            卦辭指南
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            關於周易
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;