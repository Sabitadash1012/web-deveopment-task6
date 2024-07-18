import React from 'react';
import './Modal.css';

const Modal = ({ src, closeModal, nextImage, prevImage }) => {
  return (
    <div className="modal">
      <span className="close" onClick={closeModal}>&times;</span>
      <img className="modal-content" src={src} alt="" />
      <div className="navigation">
        <span className="prev" onClick={prevImage}>&#10094;</span>
        <span className="next" onClick={nextImage}>&#10095;</span>
      </div>
    </div>
  );
};

export default Modal;