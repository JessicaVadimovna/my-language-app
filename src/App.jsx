import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AddWordForm from './components/AddWordForm';
import WordTable from './components/WordTable';
import ToggleTableButton from './components/ToggleTableButton';
import WordCarousel from './components/WordCarousel';

const App = () => {
  const [words, setWords] = useState([
    { id: 1, word: 'Hello', transcription: 'həˈlō', translation: 'Привет', theme: 'Базовое' },
    { id: 2, word: 'World', transcription: 'wərld', translation: 'Мир', theme: 'Базовое' }
  ]);
  const [isTableVisible, setTableVisible] = useState(false);

  const addWord = (newWord) => {
    newWord.id = words.length ? words[words.length - 1].id + 1 : 1;
    setWords([...words, newWord]);
  };

  const updateWord = (updatedWord) => {
    setWords(words.map((word) => (word.id === updatedWord.id ? updatedWord : word)));
  };

  const deleteWord = (id) => {
    setWords(words.filter((word) => word.id !== id));
  };

  const toggleTableVisibility = () => {
    setTableVisible(!isTableVisible);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <AddWordForm addWord={addWord} />
        <ToggleTableButton isTableVisible={isTableVisible} toggleTableVisibility={toggleTableVisibility} />
        {isTableVisible && (
          <WordTable words={words} updateWord={updateWord} deleteWord={deleteWord} />
        )}
        <WordCarousel words={words} />
      </main>
      <Footer />
    </div>
  );
};

export default App;






