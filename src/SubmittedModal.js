import React from 'react';
import './Modal.css';

const SubmittedModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Form Submitted</h2>
        <p>Your form has been submitted successfully!</p>
      </div>
    </div>
  );
};

export default SubmittedModal;