import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import wordStore from '../../stores/WordStore';
import './WordTable.css';

const WordTable = observer(() => {
  const [editMode, setEditMode] = useState(null);
  const [editedWord, setEditedWord] = useState({
    word: '',
    translation: '',
    transcription: '',
    theme: '',
  });

  const handleEditClick = (word) => {
    setEditMode(word.id);
    setEditedWord({
      word: word.word || '',
      translation: word.translation || '',
      transcription: word.transcription || '',
      theme: word.theme || '',
    });
  };

  const handleCancelClick = () => {
    setEditMode(null);
    setEditedWord({
      word: '',
      translation: '',
      transcription: '',
      theme: '',
    });
  };

  const handleSaveClick = (id) => {
    // Проверяем, что все поля заполнены и не пустые строки
    if (
      editedWord.word && editedWord.word.trim() &&
      editedWord.translation && editedWord.translation.trim() &&
      editedWord.transcription && editedWord.transcription.trim() &&
      editedWord.theme && editedWord.theme.trim()
    ) {
      wordStore.updateWord(id, editedWord);
      setEditMode(null);
    } else {
      alert('Все поля должны быть заполнены!');
    }
  };

  return (
    <div>
      <table className="word-table">
        <thead>
          <tr>
            <th>Слово</th>
            <th>Перевод</th>
            <th>Транскрипция</th>
            <th>Тема</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {wordStore.words.map((word) => (
            <tr key={word.id}>
              {editMode === word.id ? (
                <>
                  <td>
                    <input
                      type="text"
                      value={editedWord.word}
                      onChange={(e) => setEditedWord({ ...editedWord, word: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editedWord.translation}
                      onChange={(e) => setEditedWord({ ...editedWord, translation: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editedWord.transcription}
                      onChange={(e) => setEditedWord({ ...editedWord, transcription: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editedWord.theme}
                      onChange={(e) => setEditedWord({ ...editedWord, theme: e.target.value })}
                    />
                  </td>
                  <td>
                    <button onClick={() => handleSaveClick(word.id)}>Сохранить</button>
                    <button onClick={handleCancelClick}>Отмена</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{word.word || '-'}</td>
                  <td>{word.translation || '-'}</td>
                  <td>{word.transcription || '-'}</td>
                  <td>{word.theme || '-'}</td>
                  <td>
                    <button onClick={() => handleEditClick(word)}>Редактировать</button>
                    <button onClick={() => wordStore.deleteWord(word.id)}>Удалить</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default WordTable;




















