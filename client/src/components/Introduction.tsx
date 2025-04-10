// src/components/Introduction.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Introduction.css';

const Introduction: React.FC = () => {
  return (
    <div className="introduction">
      <div className="intro-content">
        <h1 className="intro-title">介紹</h1>
        <p className="intro-description">
          周易的核心思想是變化和對立的統一，強調了事物之間的相互關聯和變化的必然性。它教導我們如何在不斷變化的世界中找到平衡和和諧。
          周易的占卜方法，如擲硬幣和搖卦，幫助人們在面對不確定性時做出明智的決策。這些方法不僅是隨機的，更是基於深厚的哲學和宇宙觀。
          周易的智慧可以應用於生活的各個方面，包括人際關係、事業發展和自我成長。它鼓勵我們反思自己的行為和選擇，並尋求內心的平靜與智慧。
          在這個網站上，我們將介紹周易的基本概念、占卜方法和解讀技巧，幫助您更好地理解和應用周易的智慧。我們希望這些內容能夠啟發您，並在您的生活中帶來積極的變化。
        </p>
        <Link to="/coin-flip" className="intro-cta">
          體驗擲卦
        </Link>
      </div>
    </div>
  );
};

export default Introduction;