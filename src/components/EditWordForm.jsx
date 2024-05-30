import React, { useState } from 'react';

const AddWordForm = ({ addWord }) => {
  const [formData, setFormData] = useState({
    word: '',
    transcription: '',
    translation: '',
    theme: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addWord(formData);
    setFormData({ word: '', transcription: '', translation: '', theme: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="add-word-form">
      <input
        type="text"
        name="word"
        value={formData.word}
        onChange={handleChange}
        placeholder="Слово"
      />
      <input
        type="text"
        name="transcription"
        value={formData.transcription}
        onChange={handleChange}
        placeholder="Транскрипция"
      />
      <input
        type="text"
        name="translation"
        value={formData.translation}
        onChange={handleChange}
        placeholder="Перевод"
      />
      <input
        type="text"
        name="theme"
        value={formData.theme}
        onChange={handleChange}
        placeholder="Тема"
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddWordForm;





