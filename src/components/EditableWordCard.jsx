import React, { useState } from 'react';

const EditableWordCard = ({ word, updateWord, cancelEdit }) => {
  const [editableWord, setEditableWord] = useState({ ...word });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableWord({ ...editableWord, [name]: value });
  };

  const handleSave = () => {
    updateWord(editableWord);
  };

  return (
    <div className="word-card">
      <input
        name="word"
        value={editableWord.word}
        onChange={handleChange}
      />
      <input
        name="transcription"
        value={editableWord.transcription}
        onChange={handleChange}
      />
      <input
        name="translation"
        value={editableWord.translation}
        onChange={handleChange}
      />
      <input
        name="theme"
        value={editableWord.theme}
        onChange={handleChange}
      />
      <button onClick={handleSave}>Сохранить</button>
      <button onClick={cancelEdit}>Отмена</button>
    </div>
  );
};

export default EditableWordCard;

