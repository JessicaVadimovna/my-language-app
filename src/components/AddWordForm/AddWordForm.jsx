import React, { useState, useContext } from 'react';
import { WordContext } from '../../contexts/WordContext';

const AddWordForm = () => {
  const { addWord } = useContext(WordContext);
  const [newWord, setNewWord] = useState({ word: '', transcription: '', translation: '', theme: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewWord({ ...newWord, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(newWord).some((value) => typeof value !== 'string' || value.trim() === '')) {
      alert('Заполните все поля!');
      return;
    }
    addWord(newWord);
    setNewWord({ word: '', transcription: '', translation: '', theme: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="word" value={newWord.word} onChange={handleChange} placeholder="Слово" />
      <input type="text" name="transcription" value={newWord.transcription} onChange={handleChange} placeholder="Транскрипция" />
      <input type="text" name="translation" value={newWord.translation} onChange={handleChange} placeholder="Перевод" />
      <input type="text" name="theme" value={newWord.theme} onChange={handleChange} placeholder="Тема" />
      <button type="submit">Добавить слово</button>
    </form>
  );
};

export default AddWordForm;




