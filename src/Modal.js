import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    boxes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', address: '', boxes: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Place Order</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />

          <label htmlFor="boxes">Number of Boxes:</label>
          <input type="number" id="boxes" name="boxes" value={formData.boxes} onChange={handleChange} required />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;