// src/components/CoinFlip.tsx
import React, { useState, useRef, useEffect } from 'react';
import { LineType } from '../types/iching';
import { generateLine, createHexagram } from '../utils/iching';
import './CoinFlip.css';

interface CoinFlipProps {
  onComplete: (hexagram: ReturnType<typeof createHexagram>) => void;
}

const CoinFlip: React.FC<CoinFlipProps> = ({ onComplete }) => {
  const [question, setQuestion] = useState<string>('');
  const [isQuestionSubmitted, setIsQuestionSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [mode, setMode] = useState<'automated' | 'manual'>('automated');
  const [lines, setLines] = useState<LineType[]>([]);
  const [allTosses, setAllTosses] = useState<(2 | 3)[][]>([]);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [hexagram, setHexagram] = useState<ReturnType<typeof createHexagram> | null>(null);
  const [manualTosses, setManualTosses] = useState<(2 | 3)[]>([2, 2, 2]); // Default to Tails for each coin
  const hexagramRef = useRef<HTMLDivElement>(null);

  const getChineseLineName = (lineNumber: number): string => {
    switch (lineNumber) {
      case 1:
        return '初爻'; // First Line
      case 2:
        return '二爻'; // Second Line
      case 3:
        return '三爻'; // Third Line
      case 4:
        return '四爻'; // Fourth Line
      case 5:
        return '五爻'; // Fifth Line
      case 6:
        return '上爻'; // Top Line
      default:
        return ''; // Should not occur
    }
  };

  const getChineseNumberName = (num: number): string => {
    switch (num) {
      case 1:
        return '一';
      case 2:
        return '二';
      case 3:
        return '三';
      case 4:
        return '四';
      case 5:
        return '五';
      case 6:
        return '六';
      case 7:
        return '七';
      case 8:
        return '八';
      case 9:
        return '九';
      case 10:
        return '十';
      default:
        return ''; // Should not occur
    }
  }

  const getHexagramNumberName = (num: number): string => {
    if (num < 10) {
      return getChineseNumberName(num);
    }
    else {
      if (~~(num / 10) === 1) {
        return getChineseNumberName(10) + getChineseNumberName(num%10);
      }
      else {
        return getChineseNumberName(~~(num/10)) + getChineseNumberName(10) + getChineseNumberName(num%10);
      }
    }
  }

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) {
      setErrorMessage('請輸入您的問題以繼續占卜');
      return;
    }
    setErrorMessage(''); // Clear error message if validation passes
    setIsQuestionSubmitted(true);
  };

  const handleModeToggle = () => {
    setMode(mode === 'automated' ? 'manual' : 'automated');
    // Reset tosses if switching modes mid-process
    if (lines.length > 0) {
      setLines([]);
      setAllTosses([]);
      setHexagram(null);
    }
  };

  const handleFlip = () => {
    if (lines.length < 6 && !isFlipping) {
      setIsFlipping(true);
      const tosses = Array(3)
        .fill(0)
        .map(() => (Math.random() < 0.5 ? 2 : 3) as 2 | 3);
      setAllTosses([...allTosses, tosses]);

      setTimeout(() => {
        const newLine = generateLine(tosses);
        const updatedLines = [...lines, newLine];
        setLines(updatedLines);
        setIsFlipping(false);

        if (updatedLines.length === 6) {
          const newHexagram = createHexagram(updatedLines);
          setTimeout(() => {
            setHexagram(newHexagram);
            console.log('Hexagram set:', newHexagram);
            onComplete(newHexagram);
          }, 100);
        }
      }, 1000);
    }
  };

  const handleManualTossToggle = (index: number) => {
    const updatedTosses = [...manualTosses];
    updatedTosses[index] = updatedTosses[index] === 2 ? 3 : 2; // Toggle between 2 (Tails) and 3 (Heads)
    setManualTosses(updatedTosses);
  };

  const handleManualTossSubmit = () => {
    if (lines.length < 6) {
      setAllTosses([...allTosses, manualTosses]);
      const newLine = generateLine(manualTosses);
      const updatedLines = [...lines, newLine];
      setLines(updatedLines);

      if (updatedLines.length === 6) {
        const newHexagram = createHexagram(updatedLines);
        setTimeout(() => {
          setHexagram(newHexagram);
          console.log('Hexagram set:', newHexagram);
          onComplete(newHexagram);
        }, 100);
      } else {
        // Reset manual tosses for the next line
        setManualTosses([2, 2, 2]);
      }
    }
  };

  const handleStartOver = () => {
    setQuestion('');
    setIsQuestionSubmitted(false);
    setMode('automated');
    setLines([]);
    setAllTosses([]);
    setIsFlipping(false);
    setHexagram(null);
    setManualTosses([2, 2, 2]);
  };

  useEffect(() => {
    if (hexagram && hexagramRef.current) {
      hexagramRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hexagram]);

  return (
    <div className="coin-flip">
      <h2>周易占卜體驗</h2>

      {!isQuestionSubmitted ? (
        <div className="question-form">
          <h3>請輸入你的問題</h3>
          <p className="question-instruction">
            在通過周易中的方法占卜前，請先思考一個問題或情況。請避免選擇題，這將幫助你獲得更具體的方向。
          </p>
          <form onSubmit={handleQuestionSubmit}>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="你的問題（例：我會找到工作嗎？）"
              className="question-input"
              rows={4}
              // required
              aria-describedby="question-error"
            />
            {errorMessage && (
              <p id="question-error" className="error-message">
                {errorMessage}
              </p>
            )}
            <button type="submit" className="question-submit">
              開始占卜
            </button>
          </form>
        </div>
      ) : (
        <>
          <div className="question-display">
            <h4>你的提問:</h4>
            <p>{question}</p>
          </div>

          {!hexagram && (
            <div className="mode-toggle">
              <label className="mode-label">請選擇方法</label>
              <div className="toggle-buttons">
                <button
                  className={`toggle-button ${mode === 'automated' ? 'active' : ''}`}
                  onClick={handleModeToggle}
                >
                  網上擲卦
                </button>
                <button
                  className={`toggle-button ${mode === 'manual' ? 'active' : ''}`}
                  onClick={handleModeToggle}
                >
                  輸入擲卦結果
                </button>
              </div>
            </div>
          )}

          {!hexagram && mode === 'automated' && (
            <>
              <p className="toss-instruction">
                請擲{getChineseLineName(lines.length + 1)} (第{getChineseNumberName(lines.length + 1)}爻, 共{getChineseNumberName(6)}爻)
              </p>
              <button onClick={handleFlip} disabled={lines.length === 6 || isFlipping}>
                {isFlipping ? (
                  <span className="flipping-message">
                    擲爻中
                    <span className="spinner"></span>
                  </span>
                ) : (
                  '擲爻'
                )}
              </button>
            </>
          )}

          {!hexagram && mode === 'manual' && (
            <div className="manual-input">
              <h4>Enter Toss for Line {lines.length + 1}</h4>
              <div className="manual-toss-input">
                {manualTosses.map((toss, index) => (
                  <div
                    key={index}
                    className={`coin manual-coin ${toss === 3 ? 'heads' : 'tails'}`}
                    onClick={() => handleManualTossToggle(index)}
                    data-result={toss}
                  ></div>
                ))}
              </div>
              <button
                onClick={handleManualTossSubmit}
                className="manual-submit"
                disabled={lines.length === 6}
              >
                提交擲爻
              </button>
            </div>
          )}

          <div className="layout-container">
            <div className="toss-history">
              {allTosses.length === 0 && !hexagram && (
                <p className="start-message">
                  {mode === 'automated'
                    ? '按下擲爻按鈕開始擲卦'
                    : '點擊硬幣以改變正反面，然後按下提交擲爻按鈕'}
                </p>
              )}
              {[...allTosses].reverse().map((tosses, index) => {
                const lineNumber = allTosses.length - index;
                return (
                  <div key={index} className="toss-row">
                    <span>{getChineseLineName(lineNumber)}:</span>
                    <div className="coin-container">
                      {tosses.map((result, coinIndex) => (
                        <div
                          key={coinIndex}
                          className={`coin ${
                            mode === 'automated' && index === 0 && isFlipping
                              ? 'flipping'
                              : result === 3
                              ? 'heads'
                              : 'tails'
                          }`}
                          data-result={result}
                        ></div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            {hexagram && (
              <div className="hexagram-section visible" ref={hexagramRef}>
                <h3>
                  第{getHexagramNumberName(hexagram.number)}掛: {hexagram.chineseName}
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
                <div className="lines">
                  {hexagram.lines.map((line, index) => (
                    <div
                      key={index}
                      className={`line ${line}`}
                      title={line.includes('changing') ? 'Changing Line' : ''}
                    ></div>
                  ))}
                </div>
                <div className="description">
                  <p>{hexagram.description}</p>
                </div>
              </div>
            )}
            {hexagram && (
              <div className="reserved-section">
                <button className="start-over-button" onClick={handleStartOver}>
                  重新擲掛
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CoinFlip;