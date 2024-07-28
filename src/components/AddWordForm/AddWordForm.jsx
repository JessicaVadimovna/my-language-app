import React, { useState } from 'react';
import wordStore from '../../stores/WordStore';
import './AddWordForm.css';

const AddWordForm = () => {
  const [newWord, setNewWord] = useState({
    word: '',
    translation: '',
    transcription: '',
    topic: '',
  });

  const handleChange = (e) => {
    setNewWord({ ...newWord, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newWord.word.trim() &&
      newWord.translation.trim() &&
      newWord.transcription.trim() &&
      newWord.topic.trim()
    ) {
      wordStore.addWord(newWord);
      setNewWord({ word: '', translation: '', transcription: '', topic: '' });
    } else {
      alert('Все поля должны быть заполнены');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-word-form">
      <input
        type="text"
        name="word"
        value={newWord.word}
        onChange={handleChange}
        placeholder="Слово"
        required
      />
      <input
        type="text"
        name="translation"
        value={newWord.translation}
        onChange={handleChange}
        placeholder="Перевод"
        required
      />
      <input
        type="text"
        name="transcription"
        value={newWord.transcription}
        onChange={handleChange}
        placeholder="Транскрипция"
        required
      />
      <input
        type="text"
        name="topic"
        value={newWord.topic}
        onChange={handleChange}
        placeholder="Тема"
        required
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddWordForm;







