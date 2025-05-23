import React from 'react';
import './Button.css';

const Button = ({ text, onClick }) => {
  return (
    <button className="shared-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
