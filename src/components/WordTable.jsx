import React, { useState } from 'react';
import './WordTable.css';

const WordTable = ({ words, updateWord, deleteWord }) => {
  const [editingWordId, setEditingWordId] = useState(null);
  const [updatedWord, setUpdatedWord] = useState({});

  const handleEditClick = (word) => {
    setEditingWordId(word.id);
    setUpdatedWord(word);
  };

  const handleCancelClick = () => {
    setEditingWordId(null);
    setUpdatedWord({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedWord({ ...updatedWord, [name]: value });
  };

  const handleSaveClick = () => {
    updateWord(updatedWord);
    setEditingWordId(null);
    setUpdatedWord({});
  };

  return (
    <div className="word-table">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>СЛОВО</th>
            <th>ТРАНСКРИПЦИЯ</th>
            <th>ПЕРЕВОД</th>
            <th>ТЕМА</th>
            <th>ДЕЙСТВИЯ</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <tr key={word.id}>
              {editingWordId === word.id ? (
                <>
                  <td>{word.id}</td>
                  <td><input type="text" name="word" value={updatedWord.word} onChange={handleInputChange} /></td>
                  <td><input type="text" name="transcription" value={updatedWord.transcription} onChange={handleInputChange} /></td>
                  <td><input type="text" name="translation" value={updatedWord.translation} onChange={handleInputChange} /></td>
                  <td><input type="text" name="theme" value={updatedWord.theme} onChange={handleInputChange} /></td>
                  <td>
                    <button onClick={handleSaveClick}>Сохранить</button>
                    <button onClick={handleCancelClick}>Отмена</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{word.id}</td>
                  <td>{word.word}</td>
                  <td>{word.transcription}</td>
                  <td>{word.translation}</td>
                  <td>{word.theme}</td>
                  <td>
                    <button onClick={() => deleteWord(word.id)}>Удалить</button>
                    <button onClick={() => handleEditClick(word)}>Редактировать</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WordTable;


