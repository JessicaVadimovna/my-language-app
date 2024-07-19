import React, { createContext, useState, useEffect } from 'react';

export const WordContext = createContext();

const WordProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await fetch('/path/to/words.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setWords(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWords();
  }, []);

  const addWord = (newWord) => {
    newWord.id = words.length ? words[words.length - 1].id + 1 : 1;
    setWords([...words, newWord]);
    saveWords([...words, newWord]);
  };

  const updateWord = (updatedWord) => {
    const updatedWords = words.map((word) => (word.id === updatedWord.id ? updatedWord : word));
    setWords(updatedWords);
    saveWords(updatedWords);
  };

  const deleteWord = (id) => {
    const updatedWords = words.filter((word) => word.id !== id);
    setWords(updatedWords);
    saveWords(updatedWords);
  };

  const saveWords = async (words) => {
    try {
      const response = await fetch('/path/to/words.json', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(words),
      });
      if (!response.ok) {
        throw new Error('Произошла ошибка при сохранении слов');
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <WordContext.Provider value={{ words, addWord, updateWord, deleteWord, loading, error }}>
      {children}
    </WordContext.Provider>
  );
};

export default WordProvider;



