import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './WordCard.css'; // добавим стили анимации

const WordCard = ({ word, transcription, translation, theme, currentIndex, totalCards }) => {
  const [isTranslationVisible, setTranslationVisible] = useState(false);

  const toggleTranslation = () => {
    setTranslationVisible(!isTranslationVisible);
  };

  return (
    <div className="word-card">
      <div className="card-header">
        <h2>{word}</h2>
        <p className="transcription">{transcription}</p>
      </div>
      <div className="card-body">
        <CSSTransition
          in={isTranslationVisible}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <p className="translation">{translation}</p>
        </CSSTransition>
        {!isTranslationVisible && (
          <button onClick={toggleTranslation} className="toggle-translation-btn">Показать перевод</button>
        )}
        <p className="theme">{theme}</p>
      </div>
      <div className="card-footer">
        <p>Карточка {currentIndex} из {totalCards}</p>
      </div>
    </div>
  );
};

export default WordCard;



