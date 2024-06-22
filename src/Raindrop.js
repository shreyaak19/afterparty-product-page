import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint } from '@fortawesome/free-solid-svg-icons';

const Raindrop = ({ left, top }) => {
  return (
    <div className="raindrop-container" style={{ left, top }}>
      <FontAwesomeIcon
        icon={faTint}
        className="raindrop-icon"
        title="Afterparty feature description... Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Pellentesque aliquam hendrerit nulla, accumsan luctus 
        augue tempus a. Vivamus et felis magna. Nullam sed libero ut sem 
        bibendum aliquam. Praesent vulputate vulputate pharetra."
        data-tip="Click to learn more"
      />
    </div>
  );
};

export default Raindrop;