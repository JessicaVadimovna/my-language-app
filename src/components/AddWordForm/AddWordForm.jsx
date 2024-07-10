import React, { useState } from 'react';

const AddWordForm = ({ addWord }) => {
  const [word, setWord] = useState('');
  const [transcription, setTranscription] = useState('');
  const [translation, setTranslation] = useState('');
  const [theme, setTheme] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addWord({ word, transcription, translation, theme });
    setWord('');
    setTranscription('');
    setTranslation('');
    setTheme('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Слово" value={word} onChange={(e) => setWord(e.target.value)} required />
      <input type="text" placeholder="Транскрипция" value={transcription} onChange={(e) => setTranscription(e.target.value)} required />
      <input type="text" placeholder="Перевод" value={translation} onChange={(e) => setTranslation(e.target.value)} required />
      <input type="text" placeholder="Тема" value={theme} onChange={(e) => setTheme(e.target.value)} required />
      <button type="submit">Добавить слово</button>
    </form>
  );
};

export default AddWordForm;
