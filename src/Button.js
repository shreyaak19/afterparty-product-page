import React, { useState } from 'react';
import './Button.css';

const Button = ({ onClick }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <button
      variant="outlined"
      className={`button ${hovered ? 'hovered' : ''}`}
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      Place Order
    </button>
  );
};

export default Button;