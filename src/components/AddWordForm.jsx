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
      <input type="text" placeholder="Word" value={word} onChange={(e) => setWord(e.target.value)} required />
      <input type="text" placeholder="Transcription" value={transcription} onChange={(e) => setTranscription(e.target.value)} required />
      <input type="text" placeholder="Translation" value={translation} onChange={(e) => setTranslation(e.target.value)} required />
      <input type="text" placeholder="Theme" value={theme} onChange={(e) => setTheme(e.target.value)} required />
      <button type="submit">Добавить слово</button>
    </form>
  );
};

export default AddWordForm;
