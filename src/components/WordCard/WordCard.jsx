import React from 'react';
import './WordCard.css';

const WordCard = ({ word, showTranslation }) => {
  return (
    <div className="word-card">
      <div className="word">{word.word}</div>
      <div className="transcription">{word.transcription}</div>
      {showTranslation && <div className="translation">{word.translation}</div>}
      <div className="theme">{word.theme}</div>
    </div>
  );
};

export default WordCard;







