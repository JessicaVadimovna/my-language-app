import React, { useState } from 'react';

const WordTable = ({ words, updateWord, deleteWord }) => {
  const [editingWordId, setEditingWordId] = useState(null);
  const [editableWord, setEditableWord] = useState({});

  const handleEdit = (word) => {
    setEditingWordId(word.id);
    setEditableWord({ ...word });
  };

  const handleCancelEdit = () => {
    setEditingWordId(null);
    setEditableWord({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableWord({ ...editableWord, [name]: value });
  };

  const handleSave = () => {
    updateWord(editableWord);
    setEditingWordId(null);
  };

  return (
    <table className="word-table">
      <thead>
        <tr>
          <th>Слово</th>
          <th>Транскрипция</th>
          <th>Перевод</th>
          <th>Тема</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {words.map((word) =>
          editingWordId === word.id ? (
            <tr key={word.id}>
              <td>
                <input
                  name="word"
                  value={editableWord.word}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  name="transcription"
                  value={editableWord.transcription}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  name="translation"
                  value={editableWord.translation}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  name="theme"
                  value={editableWord.theme}
                  onChange={handleChange}
                />
              </td>
              <td>
                <button onClick={handleSave}>Сохранить</button>
                <button onClick={handleCancelEdit}>Отмена</button>
              </td>
            </tr>
          ) : (
            <tr key={word.id}>
              <td>{word.word}</td>
              <td>{word.transcription}</td>
              <td>{word.translation}</td>
              <td>{word.theme}</td>
              <td>
                <button onClick={() => handleEdit(word)}>Редактировать</button>
                <button onClick={() => deleteWord(word.id)}>Удалить</button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default WordTable;
