import React from 'react';

const ToggleTableButton = ({ isTableVisible, toggleTableVisibility }) => {
  return (
    <button onClick={toggleTableVisibility}>
      {isTableVisible ? 'Скрыть список всех слов' : 'Показать список всех слов'}
    </button>
  );
};

export default ToggleTableButton;
