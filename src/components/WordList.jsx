import React from 'react';

const WordList = ({ words, setEditingWord, deleteWord }) => {
  return (
    <table className="word-list">
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
            <td>{word.word}</td>
            <td>{word.transcription}</td>
            <td>{word.translation}</td>
            <td>{word.theme}</td>
            <td className="table-actions">
              <button className="edit-btn" onClick={() => setEditingWord(word)}>Редактировать</button>
              <button className="delete-btn" onClick={() => deleteWord(word.id)}>Удалить</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WordList;





