import React, { useState, useEffect, forwardRef } from 'react';
import './WordCard.css';

const WordCard = forwardRef(({ word, onShowTranslation }, ref) => {
  const [isTranslationVisible, setTranslationVisible] = useState(false);

  const handleShowTranslation = () => {
    setTranslationVisible(true);
    onShowTranslation();
  };

  useEffect(() => {
    setTranslationVisible(false);
  }, [word]);

  return (
    <div className="word-card">
      <h3>{word.word}</h3>
      <p>{word.transcription}</p>
      {isTranslationVisible ? (
        <p>{word.translation}</p>
      ) : (
        <button ref={ref} onClick={handleShowTranslation}>
          Показать перевод
        </button>
      )}
      <p>{word.theme}</p>
    </div>
  );
});

export default WordCard;




