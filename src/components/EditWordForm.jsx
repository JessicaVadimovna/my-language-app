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
      <input type="text" placeholder="Слово" value={newWord} onChange={(e) => setNewWord(e.target.value)} required />
      <input type="text" placeholder="Транскрипция" value={newTranscription} onChange={(e) => setNewTranscription(e.target.value)} required />
      <input type="text" placeholder="Перевод" value={newTranslation} onChange={(e) => setNewTranslation(e.target.value)} required />
      <input type="text" placeholder="Тема" value={newTheme} onChange={(e) => setNewTheme(e.target.value)} required />
      <button type="submit">Обновить слово</button>
    </form>
  );
};

export default EditWordForm;
