import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import WordCard from './WordCard';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './WordCarousel.css'; // добавим стили анимации

const WordCarousel = ({ words = [], initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + words.length) % words.length);
  };

  if (words.length === 0) {
    return <p>Список слов пуст.</p>;
  }

  const { word, transcription, translation, theme } = words[currentIndex];

  return (
    <div className="word-carousel">
      <button onClick={prevCard} className="nav-button">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className="carousel-content">
        <CSSTransition
          key={currentIndex}
          timeout={300}
          classNames="fade"
        >
          <WordCard 
            word={word} 
            transcription={transcription} 
            translation={translation} 
            theme={theme} 
            currentIndex={currentIndex + 1} 
            totalCards={words.length} 
          />
        </CSSTransition>
      </div>
      <button onClick={nextCard} className="nav-button">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default WordCarousel;




