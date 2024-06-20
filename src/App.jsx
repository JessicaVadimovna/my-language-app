import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import AddWordForm from './components/AddWordForm';
import WordTable from './components/WordTable';
import ToggleTableButton from './components/ToggleTableButton';
import WordCarousel from './components/WordCarousel';
import Menu from './components/Menu';
import NotFound from './components/NotFound';
import './components/WordCard.css';
import './components/WordCarousel.css';

const Home = ({ words, addWord, updateWord, deleteWord, isTableVisible, toggleTableVisibility }) => (
  <div>
    <AddWordForm addWord={addWord} />
    <ToggleTableButton isTableVisible={isTableVisible} toggleTableVisibility={toggleTableVisibility} />
    {isTableVisible && (
      <WordTable words={words} updateWord={updateWord} deleteWord={deleteWord} />
    )}
  </div>
);

const Game = ({ words }) => (
  <div>
    <WordCarousel words={words} />
  </div>
);

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
    <Router>
      <div className="App">
        <Menu />
        <main>
          <Routes>
            <Route path="/" element={
              <Home
                words={words}
                addWord={addWord}
                updateWord={updateWord}
                deleteWord={deleteWord}
                isTableVisible={isTableVisible}
                toggleTableVisibility={toggleTableVisibility}
              />
            } />
            <Route path="/game" element={<Game words={words} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
