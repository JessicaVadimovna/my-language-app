import React, { useState } from 'react';
import WordCard from './WordCard';
import EditableWordCard from './EditableWordCard';

const WordList = ({ words, updateWord, deleteWord }) => {
  const [editingWordId, setEditingWordId] = useState(null);

  const handleEdit = (id) => {
    setEditingWordId(id);
  };

  const handleCancelEdit = () => {
    setEditingWordId(null);
  };

  return (
    <div className="word-list">
      {words.map((word) =>
        editingWordId === word.id ? (
          <EditableWordCard
            key={word.id}
            word={word}
            updateWord={updateWord}
            cancelEdit={handleCancelEdit}
          />
        ) : (
          <WordCard
            key={word.id}
            word={word}
            onEdit={() => handleEdit(word.id)}
            onDelete={() => deleteWord(word.id)}
          />
        )
      )}
    </div>
  );
};

export default WordList;






