import React from 'react';
import './App.css';
import Raindrop from './Raindrop';

function Raindrops() {

  return (
    <div className="raindrops-container">
        <Raindrop left='100%' top='30%' />
    </div>
  );
}

export default Raindrops;