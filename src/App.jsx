import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import WordList from './components/WordList';
import AddWordForm from './components/AddWordForm';
import EditWordForm from './components/EditWordForm';

const App = () => {
  const [words, setWords] = useState([
    { id: 1, word: 'Hello', transcription: 'həˈlō', translation: 'Привет', theme: 'Базовое' },
  ]);
  const [editingWord, setEditingWord] = useState(null);

  const addWord = (newWord) => {
    newWord.id = words.length ? words[words.length - 1].id + 1 : 1;
    setWords([...words, newWord]);
  };

  const updateWord = (updatedWord) => {
    setWords(words.map((word) => (word.id === updatedWord.id ? updatedWord : word)));
    setEditingWord(null); // Exit editing mode after update
  };

  const deleteWord = (id) => {
    setWords(words.filter((word) => word.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <main>
        {editingWord ? (
          <EditWordForm word={editingWord} updateWord={updateWord} />
        ) : (
          <>
            <AddWordForm addWord={addWord} />
            <WordList words={words} setEditingWord={setEditingWord} deleteWord={deleteWord} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;

