import React, { useEffect, useRef } from 'react';
import './WordCard.css';

const WordCard = ({ word, isTranslationVisible, onShowTranslation }) => {
  const showTranslationButtonRef = useRef(null);

  useEffect(() => {
    if (showTranslationButtonRef.current) {
      showTranslationButtonRef.current.focus();
    }
  }, [word]);

  const handleShowTranslation = () => {
    onShowTranslation(word.id);
  };

  return (
    <div className="word-card">
      <h3>{word.word}</h3>
      <p>{word.transcription}</p>
      {isTranslationVisible ? (
        <p className="translation">{word.translation}</p>
      ) : (
        <button onClick={handleShowTranslation} ref={showTranslationButtonRef}>
          Показать перевод
        </button>
      )}
    </div>
  );
};

export default WordCard;






