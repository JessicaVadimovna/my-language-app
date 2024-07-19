import React, { useState, useEffect, useRef, useContext } from 'react';
import { WordContext } from '../../contexts/WordContext';
import WordCard from '../WordCard/WordCard';
import './WordCarousel.css';

const WordCarousel = () => {
  const { words } = useContext(WordContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [learnedWords, setLearnedWords] = useState([]);
  const [showTranslation, setShowTranslation] = useState(false);
  const translationButtonRef = useRef(null);

  useEffect(() => {
    if (translationButtonRef.current) {
      translationButtonRef.current.focus();
    }
  }, [currentIndex]);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    setShowTranslation(false);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + words.length) % words.length);
    setShowTranslation(false);
  };

  const handleShowTranslation = () => {
    setShowTranslation(true);
    if (!learnedWords.includes(words[currentIndex].id)) {
      setLearnedWords((prevLearnedWords) => [...prevLearnedWords, words[currentIndex].id]);
    }
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev-button" onClick={handlePrevClick}>
        &lt; {/* символ стрелки влево */}
      </button>
      <div className="word-card-container">
        <WordCard word={words[currentIndex]} showTranslation={showTranslation} />
        <div className="translation-container">
          <button
            onClick={handleShowTranslation}
            ref={translationButtonRef}
            className="translation-button"
          >
            Показать перевод
          </button>
        </div>
      </div>
      <button className="carousel-button next-button" onClick={handleNextClick}>
        &gt; {/* символ стрелки вправо */}
      </button>
      <div className="learned-counter">
        Изучено слов: {learnedWords.length}
      </div>
    </div>
  );
};

export default WordCarousel;