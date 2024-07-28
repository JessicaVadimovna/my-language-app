import React from 'react';
import './WordCard.css';

const WordCard = ({ word, showTranslation }) => {
  if (!word) {
    return null; // Если слово не передано, не рендерим компонент
  }

  return (
    <div className="word-card">
      <h2>{word.word}</h2>
      {showTranslation && (
        <div className="translation">
          <p>{word.translation}</p>
          <p>{word.transcription}</p>
        </div>
      )}
    </div>
  );
};

export default WordCard;









