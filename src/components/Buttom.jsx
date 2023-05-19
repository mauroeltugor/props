import React from 'react';

const Button = ({ link, nombre, style, buttonName }) => {
  const handleButtonClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div>
      <h1>{nombre}</h1>
      <button style={{ backgroundColor: style }} onClick={handleButtonClick}>
        {buttonName}
      </button>
      <hr />
    </div>
  );
};

export default Button;
