import React, { useState, useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import wordStore from '../../stores/WordStore';
import WordCard from '../WordCard/WordCard';
import './WordCarousel.css';

const WordCarousel = observer(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [learnedWords, setLearnedWords] = useState([]);
  const [showTranslation, setShowTranslation] = useState(false);
  const translationButtonRef = useRef(null);

  useEffect(() => {
    wordStore.fetchWords();
  }, []);

  useEffect(() => {
    if (translationButtonRef.current) {
      translationButtonRef.current.focus();
    }
  }, [currentIndex]);

  const handleNextClick = () => {
    if (wordStore.words.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % wordStore.words.length);
      setShowTranslation(false);
    }
  };

  const handlePrevClick = () => {
    if (wordStore.words.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + wordStore.words.length) % wordStore.words.length);
      setShowTranslation(false);
    }
  };

  const handleShowTranslation = () => {
    setShowTranslation(true);
    if (!learnedWords.includes(wordStore.words[currentIndex].id)) {
      setLearnedWords((prevLearnedWords) => [...prevLearnedWords, wordStore.words[currentIndex].id]);
    }
  };

  // Убедитесь, что words не пустой и currentIndex в пределах допустимого диапазона
  const word = wordStore.words.length > 0 ? wordStore.words[currentIndex] : null;

  return (
    <div className="carousel">
      <button className="carousel-button prev-button" onClick={handlePrevClick} disabled={wordStore.words.length === 0}>
        &lt;
      </button>
      <div className="word-card-container">
        {word ? (
          <WordCard word={word} showTranslation={showTranslation} />
        ) : (
          <p>Загрузка слов...</p>
        )}
        <div className="translation-container">
          <button
            onClick={handleShowTranslation}
            ref={translationButtonRef}
            className="translation-button"
            disabled={!word}
          >
            Показать перевод
          </button>
        </div>
      </div>
      <button className="carousel-button next-button" onClick={handleNextClick} disabled={wordStore.words.length === 0}>
        &gt;
      </button>
      <div className="learned-counter">
        Изучено слов: {learnedWords.length}
      </div>
    </div>
  );
});

export default WordCarousel;


