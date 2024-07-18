import React from 'react';
import './Image.css';

const Image = ({ src, openModal }) => {
  return (
    <div className="image-container" onClick={openModal}>
      <img src={src} alt="" className="image" />
    </div>
  );
};

export default Image;