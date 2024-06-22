import React, { useState } from 'react';
import './App.css';
import ThreeD from './ThreeD';
import Raindrops from './Raindrops';
import SubmittedModal from './SubmittedModal';
import Button from './Button';
import Modal from './Modal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isSubmittedOpen, setIsSubmittedOpen] = useState(false);


  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (data) => {
    setModalOpen(false);
    setIsSubmittedOpen(true);
  };

  const closeSubmitted= () => {
    setIsSubmittedOpen(false);
  };


  return (
    <div className="App">
      <main>
        <div className="RaindropsObj-1">
        <Raindrops />
        </div>
        <div className="RaindropsObj-2">
        <Raindrops />
        </div>
        <div className="ThreeDObj">
        <ThreeD modelPath="/GLTF FIle.glb" />
        </div>
        <div className="OtherObjs">
        <Button onClick={handleButtonClick} />
        <Modal isOpen={modalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} />
        <SubmittedModal isOpen={isSubmittedOpen} onClose={closeSubmitted} />
        </div>
      </main>
    </div>
  );
}

export default App;
