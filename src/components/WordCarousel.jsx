import React, { useState } from 'react';
import WordCard from './WordCard';
import './WordCarousel.css';

const WordCarousel = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [studiedWords, setStudiedWords] = useState([]);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? words.length - 1 : prevIndex - 1));
  };

  const handleShowTranslation = (wordId) => {
    if (!studiedWords.includes(wordId)) {
      setStudiedWords([...studiedWords, wordId]);
    }
  };

  return (
    <div className="word-carousel">
      <button onClick={prevCard}>&lt;</button>
      {words.length > 0 && (
        <WordCard
          word={words[currentIndex]}
          isTranslationVisible={studiedWords.includes(words[currentIndex].id)}
          onShowTranslation={handleShowTranslation}
        />
      )}
      <button onClick={nextCard}>&gt;</button>
      <p>
        Изучено слов: {studiedWords.length} из {words.length}
      </p>
    </div>
  );
};

export default WordCarousel;







