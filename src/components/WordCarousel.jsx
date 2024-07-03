import React, { useState, useEffect, useRef } from 'react';
import WordCard from './WordCard';
import './WordCarousel.css';

const WordCarousel = ({ words, onWordLearned, learnedWords }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextCardRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + words.length) % words.length);
  };

  useEffect(() => {
    if (nextCardRef.current) {
      nextCardRef.current.focus();
    }
  }, [currentIndex]);

  const handleShowTranslation = () => {
    if (!learnedWords.includes(words[currentIndex].id)) {
      onWordLearned(words[currentIndex].id);
    }
  };

  return (
    <div className="word-carousel">
      <button onClick={handlePrevious}>&lt;</button>
      <WordCard
        word={words[currentIndex]}
        onShowTranslation={handleShowTranslation}
        ref={nextCardRef}
      />
      <button onClick={handleNext}>&gt;</button>
      <div>
        {currentIndex + 1} / {words.length}
      </div>
    </div>
  );
};

export default WordCarousel;






