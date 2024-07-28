// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import './App.css';
import Footer from './components/Footer/Footer';
import AddWordForm from './components/AddWordForm/AddWordForm';
import WordTable from './components/WordTable/WordTable';
import ToggleTableButton from './components/ToggleTableButton/ToggleTableButton';
import WordCarousel from './components/WordCarousel/WordCarousel';
import Menu from './components/Menu/Menu';
import NotFound from './components/NotFound/NotFound';
import wordStore from './stores/WordStore';

const Home = observer(() => {
  const { words, addWord, updateWord, deleteWord, loading, error } = wordStore;
  const [isTableVisible, setTableVisible] = React.useState(false);

  useEffect(() => {
    wordStore.fetchWords();
  }, []);

  const toggleTableVisibility = () => {
    setTableVisible(!isTableVisible);
  };

  return (
    <div>
      {error && <div className="error">{error}</div>}
      <AddWordForm addWord={addWord} />
      <ToggleTableButton isTableVisible={isTableVisible} toggleTableVisibility={toggleTableVisibility} />
      {loading ? <div>Loading...</div> : isTableVisible && <WordTable words={words} updateWord={updateWord} deleteWord={deleteWord} />}
    </div>
  );
});

const Game = observer(() => {
  const { words } = wordStore;
  const [learnedWords, setLearnedWords] = React.useState([]);

  const handleWordLearned = (wordId) => {
    if (!learnedWords.includes(wordId)) {
      setLearnedWords([...learnedWords, wordId]);
    }
  };

  return (
    <div>
      <WordCarousel words={words} onWordLearned={handleWordLearned} learnedWords={learnedWords} />
    </div>
  );
});

const App = observer(() => {
  return (
    <Router>
      <div className="App">
        <Menu />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
});

export default App;










