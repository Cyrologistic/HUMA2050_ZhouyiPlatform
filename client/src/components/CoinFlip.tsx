import React, { useState, useRef, useEffect } from 'react';
import { LineType, Hexagram } from '../types/iching';
import { generateLine, createHexagram } from '../utils/iching';
import { generateInterpretation } from '../utils/llm'; // Import the new LLM function
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
  const [manualTosses, setManualTosses] = useState<(2 | 3)[]>([2, 2, 2]);
  const [interpretation, setInterpretation] = useState<string>(''); // New state for LLM interpretation
  const [interpretationLoading, setInterpretationLoading] = useState<boolean>(false); // Loading state for LLM call
  const [interpretationError, setInterpretationError] = useState<string>(''); // Error state for LLM call
  const hexagramRef = useRef<HTMLDivElement>(null);

  const getChineseLineName = (lineNumber: number): string => {
    switch (lineNumber) {
      case 1:
        return '初爻';
      case 2:
        return '二爻';
      case 3:
        return '三爻';
      case 4:
        return '四爻';
      case 5:
        return '五爻';
      case 6:
        return '上爻';
      default:
        return '';
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
        return '';
    }
  };

  const getHexagramNumberName = (num: number): string => {
    if (num < 10) {
      return getChineseNumberName(num);
    } else {
      if (~~(num / 10) === 1) {
        return getChineseNumberName(10) + getChineseNumberName(num % 10);
      } else {
        return getChineseNumberName(~~(num / 10)) + getChineseNumberName(10) + getChineseNumberName(num % 10);
      }
    }
  };

  const containsChinese = (text: string): boolean => {
    const chineseRegex = /[\u4E00-\u9FFF]/;
    return chineseRegex.test(text);
  };

  const computeSecondaryHexagram = (primaryHexagram: Hexagram): Hexagram => {
  const newLines = primaryHexagram.lines.map((line) => {
    if (line === 'old_yin') return 'young_yang'; // Old Yin -> Yang
    if (line === 'old_yang') return 'young_yin'; // Old Yang -> Yin
    return line; // Non-changing lines remain the same
    }) as LineType[];
    return createHexagram(newLines);
  };

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) {
      setErrorMessage('請輸入您的問題以繼續占卜');
      return;
    }

    if (!containsChinese(trimmedQuestion)) {
      setErrorMessage('請使用中文輸入您的問題');
      return;
    }

    setErrorMessage('');
    setIsQuestionSubmitted(true);
  };

  const handleModeToggle = () => {
    setMode(mode === 'automated' ? 'manual' : 'automated');
    if (lines.length > 0) {
      setLines([]);
      setAllTosses([]);
      setHexagram(null);
      setInterpretation(''); // Reset interpretation
      setInterpretationError('');
    }
  };

  const handleFlip = async () => {
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
          setHexagram(newHexagram);
          onComplete(newHexagram);

          // Generate LLM interpretation
          generateLLMInterpretation(newHexagram);
        }
      }, 1000);
    }
  };

  const handleManualTossToggle = (index: number) => {
    const updatedTosses = [...manualTosses];
    updatedTosses[index] = updatedTosses[index] === 2 ? 3 : 2;
    setManualTosses(updatedTosses);
  };

  const handleManualTossSubmit = async () => {
    console.log('handleManualTossSubmit called: lines.length =', lines.length);
    if (lines.length < 6) {
      console.log('Manual tosses:', manualTosses, 'Sum:', manualTosses.reduce((acc, curr) => acc + curr, 0));
      setAllTosses([...allTosses, manualTosses]);
      const newLine = generateLine(manualTosses);
      console.log('Generated line:', newLine);
      const updatedLines = [...lines, newLine];
      console.log('Updated lines:', updatedLines);
      setLines(updatedLines);

      if (updatedLines.length === 6) {
        console.log('Six lines reached, generating hexagram');
        try {
          const newHexagram = createHexagram(updatedLines);
          console.log('createHexagram result:', newHexagram);
          setHexagram(newHexagram);
          console.log('Hexagram set:', newHexagram);
          onComplete(newHexagram);

          // Generate LLM interpretation
          generateLLMInterpretation(newHexagram);
        } catch (error) {
          console.error('Error in createHexagram:', error);
        }
      } else {
        setManualTosses([2, 2, 2]);
      }
    } else {
      console.log('Toss prevented: lines.length =', lines.length);
    }
  };

  // Function to generate LLM interpretation
  const generateLLMInterpretation = async (hexagram: Hexagram) => {
    setInterpretationLoading(true);
    setInterpretationError('');
    try {
      // Identify changing lines and their interpretations
      const changingLines = hexagram.lines
        .map((line, index) => (line === 'old_yin' || line === 'old_yang' ? index : -1))
        .filter(index => index !== -1);
      const changingLineInterpretations = changingLines.map(index => hexagram.lineInterpretations[index]);

      const interpretation = await generateInterpretation({
        question,
        hexagram,
        changingLineInterpretations,
        secondaryHexagram: changingLines.length > 0 ? computeSecondaryHexagram(hexagram) : null,
      });
      setInterpretation(interpretation);
    } catch (error) {
      console.error('Error generating LLM interpretation:', error);
      setInterpretationError('無法生成解釋，請稍後再試。');
    } finally {
      setInterpretationLoading(false);
    }
  };

  const handleStartOver = () => {
    setQuestion('');
    setIsQuestionSubmitted(false);
    setErrorMessage('');
    setMode('automated');
    setLines([]);
    setAllTosses([]);
    setIsFlipping(false);
    setHexagram(null);
    setManualTosses([2, 2, 2]);
    setInterpretation(''); // Reset interpretation
    setInterpretationError('');
    setInterpretationLoading(false);
  };

  useEffect(() => {
    if (hexagram && hexagramRef.current) {
      hexagramRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hexagram]);

  // Count changing lines and get their interpretations
  const changingLines = hexagram
    ? hexagram.lines
        .map((line, index) => (line === 'old_yin' || line === 'old_yang' ? index : -1))
        .filter(index => index !== -1)
    : [];

  // Compute secondary hexagram if there are changing lines
  const secondaryHexagram = hexagram && changingLines.length > 0 ? computeSecondaryHexagram(hexagram) : null;

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
              className={`question-input ${errorMessage ? 'error' : ''}`}
              rows={4}
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
              <h4>請設置 {getChineseLineName(lines.length + 1)} (第{getChineseNumberName(lines.length + 1)}爻)</h4>
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
                  第{getHexagramNumberName(hexagram.number)}卦: {hexagram.chineseName}
                </h3>
                {hexagram.image ? (
                  <img
                    src={hexagram.image}
                    alt={`Hexagram ${hexagram.number}`}
                    className="hexagram-image"
                  />
                ) : (
                  <p className="no-image">無圖片可顯示</p>
                )}
                {/* <div className="hexagram-statements"> */}
                <div className="description">
                  <h4>卦辭:</h4>
                  <p>{hexagram.description}</p>
                  <h4>爻辭:</h4>
                  {hexagram.lines.map((line, index) => {
                    const lineNumber = index + 1; // 1-based index for display (初爻 to 上爻)
                    const isChangingLine = line === 'old_yin' || line === 'old_yang';
                    return (
                      <div key={index}>
                        <p>
                          <strong>{getChineseLineName(lineNumber)}:</strong>{' '}
                          {hexagram.lineInterpretations[index]}{' '}
                          {isChangingLine && <span className="changing-indicator">(變爻)</span>}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="description">
                  {/* {changingLines.length > 0 && (
                    <>
                      <h4>變爻:</h4>
                      {changingLines.map((lineIndex) => (
                        <div key={lineIndex} className="changing-line">
                          <p>
                            <strong>{getChineseLineName(lineIndex + 1)}</strong>{' '}
                            {/* {hexagram.lineInterpretations[lineIndex]}}
                          </p>
                        </div>
                      ))}
                    </>
                  )}  */}
                  {secondaryHexagram && (
                    <>
                      <h3>變卦</h3>
                      <h4>{hexagram.chineseName}之{secondaryHexagram.chineseName}:</h4>
                      {secondaryHexagram.image ? (
                        <img
                          src={secondaryHexagram.image}
                          alt={`Hexagram ${secondaryHexagram.number}`}
                          className="hexagram-image"
                        />
                      ) : (
                        <p className="no-image">無圖片可顯示</p>
                      )}
                      <div className="description">
                        <h4>卦辭:</h4>
                        <p>{secondaryHexagram.description}</p>
                        <h4>爻辭:</h4>
                        {secondaryHexagram.lines.map((line, index) => {
                          const lineNumber = index + 1; // 1-based index for display (初爻 to 上爻)
                          const isChangingLine = line === 'old_yin' || line === 'old_yang';
                          return (
                            <div key={index}>
                              <p>
                                <strong>{getChineseLineName(lineNumber)}:</strong>{' '}
                                {secondaryHexagram.lineInterpretations[index]}{' '}
                                {isChangingLine && <span className="changing-indicator">(變爻)</span>}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                      {/* <div className="lines">
                        {secondaryHexagram.lines.map((line, index) => (
                          <div
                            key={index}
                            className={`line ${line}`}
                          ></div>
                        ))}
                      </div> */}
                    </>
                  )} 
                  <h4>個人化解釋:</h4>
                  {interpretationLoading ? (
                    <p>正在生成解釋，請稍候...</p>
                  ) : interpretationError ? (
                    <p className="error-message">{interpretationError}</p>
                  ) : interpretation ? (
                    <p>{interpretation}</p>
                  ) : (
                    <p>無法生成解釋，請重新嘗試。</p>
                  )}
                </div>
              </div>
            )}
            {hexagram && (
              <div className="reserved-section">
                <button className="start-over-button" onClick={handleStartOver}>
                  重新擲卦
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