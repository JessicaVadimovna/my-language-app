import React, { useState } from 'react';

const WordTable = ({ words, updateWord, deleteWord }) => {
  const [editingId, setEditingId] = useState(null);
  const [editedWord, setEditedWord] = useState({});
  const [errors, setErrors] = useState({});

  const handleEditClick = (word) => {
    setEditingId(word.id);
    setEditedWord({ ...word });
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedWord({ ...editedWord, [name]: value });
    setErrors({ ...errors, [name]: !value.trim() });
  };

  const handleSaveClick = () => {
    const newErrors = {};
    ['word', 'transcription', 'translation', 'theme'].forEach((field) => {
      if (!editedWord[field]?.trim()) {
        newErrors[field] = true;
      }
    });

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      alert('Ошибка: все поля должны быть заполнены');
    } else {
      console.log('Сохранено слово:', editedWord);
      updateWord(editedWord);
      setEditingId(null);
    }
  };

  const handleCancelClick = () => {
    setEditingId(null);
    setEditedWord({});
    setErrors({});
  };

  return (
    <table className="word-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Слово</th>
          <th>Транскрипция</th>
          <th>Перевод</th>
          <th>Тема</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {words.map((word, index) => (
          <tr key={word.id}>
            <td>{index + 1}</td>
            {editingId === word.id ? (
              <>
                <td>
                  <input
                    type="text"
                    name="word"
                    value={editedWord.word}
                    onChange={handleInputChange}
                    className={errors.word ? 'error' : ''}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="transcription"
                    value={editedWord.transcription}
                    onChange={handleInputChange}
                    className={errors.transcription ? 'error' : ''}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="translation"
                    value={editedWord.translation}
                    onChange={handleInputChange}
                    className={errors.translation ? 'error' : ''}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="theme"
                    value={editedWord.theme}
                    onChange={handleInputChange}
                    className={errors.theme ? 'error' : ''}
                  />
                </td>
                <td>
                  <button onClick={handleSaveClick} disabled={Object.keys(errors).some(key => errors[key])} className={Object.keys(errors).some(key => errors[key]) ? 'disabled' : ''}>Сохранить</button>
                  <button onClick={handleCancelClick}>Отмена</button>
                </td>
              </>
            ) : (
              <>
                <td>{word.word}</td>
                <td>{word.transcription}</td>
                <td>{word.translation}</td>
                <td>{word.theme}</td>
                <td>
                  <button onClick={() => handleEditClick(word)}>Редактировать</button>
                  <button onClick={() => deleteWord(word.id)}>Удалить</button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WordTable;
