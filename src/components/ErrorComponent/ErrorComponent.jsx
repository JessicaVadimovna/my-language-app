import React from 'react';
import './ErrorComponent.css';

const ErrorComponent = ({ message }) => {
  return (
    <div className="error">
      <p>{message}</p>
    </div>
  );
};

export default ErrorComponent;
