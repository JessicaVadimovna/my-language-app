import React, { useState } from 'react';

const WordCard = ({ word, onEdit, onDelete }) => {
  const [isTranslationVisible, setTranslationVisible] = useState(false);

  const handleShowTranslation = () => {
    setTranslationVisible(true);
  };

  return (
    <div className="word-card">
      <p>Слово: {word.word}</p>
      <p>Транскрипция: {word.transcription}</p>
      {isTranslationVisible ? (
        <p>Перевод: {word.translation}</p>
      ) : (
        <button onClick={handleShowTranslation}>Показать перевод</button>
      )}
      <p>Тема: {word.theme}</p>
      <button onClick={onEdit}>Редактировать</button>
      <button onClick={onDelete}>Удалить</button>
    </div>
  );
};

export default WordCard;

