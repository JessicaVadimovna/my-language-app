import React, { useState, useContext } from 'react';
import { WordContext } from '../../contexts/WordContext';
import './WordTable.css';

const WordTable = () => {
  const { words, updateWord, deleteWord } = useContext(WordContext);
  const [editId, setEditId] = useState(null);
  const [editWord, setEditWord] = useState({
    word: '',
    transcription: '',
    translation: '',
    theme: ''
  });

  const handleEditClick = (word) => {
    setEditId(word.id);
    setEditWord({
      word: word.word,
      transcription: word.transcription,
      translation: word.translation,
      theme: word.theme
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditWord((prevWord) => ({
      ...prevWord,
      [name]: value
    }));
  };

  const handleSaveClick = () => {
    const fields = ['word', 'transcription', 'translation', 'theme'];
    const emptyFields = fields.filter((field) => !editWord[field] || editWord[field].trim() === '');

    if (emptyFields.length > 0) {
      alert('Заполните все поля');
      return;
    }

    updateWord({ id: editId, ...editWord });
    setEditId(null);
    setEditWord({
      word: '',
      transcription: '',
      translation: '',
      theme: ''
    });
  };

  const handleCancelClick = () => {
    setEditId(null);
    setEditWord({
      word: '',
      transcription: '',
      translation: '',
      theme: ''
    });
  };

  const isSaveDisabled = () => {
    return ['word', 'transcription', 'translation', 'theme'].some((field) => !editWord[field].trim());
  };

  return (
    <table>
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
        {words.map((word) => (
          <tr key={word.id}>
            {editId === word.id ? (
              <>
                <td>
                  <input
                    type="text"
                    name="word"
                    value={editWord.word}
                    onChange={handleInputChange}
                    className={!editWord.word.trim() ? 'input-error' : ''}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="transcription"
                    value={editWord.transcription}
                    onChange={handleInputChange}
                    className={!editWord.transcription.trim() ? 'input-error' : ''}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="translation"
                    value={editWord.translation}
                    onChange={handleInputChange}
                    className={!editWord.translation.trim() ? 'input-error' : ''}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="theme"
                    value={editWord.theme}
                    onChange={handleInputChange}
                    className={!editWord.theme.trim() ? 'input-error' : ''}
                  />
                </td>
                <td>
                  <button onClick={handleSaveClick} disabled={isSaveDisabled()}>
                    Сохранить
                  </button>
                  <button onClick={handleCancelClick}>
                    Отменить
                  </button>
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






