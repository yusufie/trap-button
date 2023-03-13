import React from 'react';
import './index.css';

const Button = ({type, children}) => {
  return (
    <button className={`button ${type}`}>
      {children}
    </button>
  );
};

export default Button;

