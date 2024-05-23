import React from 'react';

const WordCard = ({ word }) => {
  return (
    <div className="word-card">
      <h2>{word.word}</h2>
      <p>Транскрипция: {word.transcription}</p>
      <p>Перевод: {word.translation}</p>
      <p>Тема: {word.theme}</p>
      <button>Редактировать</button>
      <button>Удалить</button>
    </div>
  );
};

export default WordCard;
