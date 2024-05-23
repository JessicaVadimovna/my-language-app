import React, { useState } from 'react';

const EditWordForm = ({ word, updateWord }) => {
  const [newWord, setNewWord] = useState(word.word);
  const [newTranscription, setNewTranscription] = useState(word.transcription);
  const [newTranslation, setNewTranslation] = useState(word.translation);
  const [newTheme, setNewTheme] = useState(word.theme);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateWord({ ...word, word: newWord, transcription: newTranscription, translation: newTranslation, theme: newTheme });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Word" value={newWord} onChange={(e) => setNewWord(e.target.value)} required />
      <input type="text" placeholder="Transcription" value={newTranscription} onChange={(e) => setNewTranscription(e.target.value)} required />
      <input type="text" placeholder="Translation" value={newTranslation} onChange={(e) => setNewTranslation(e.target.value)} required />
      <input type="text" placeholder="Theme" value={newTheme} onChange={(e) => setNewTheme(e.target.value)} required />
      <button type="submit">Обновить слово</button>
    </form>
  );
};

export default EditWordForm;
