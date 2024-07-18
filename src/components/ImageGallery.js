import React, { useState } from 'react';
import Image from './Image';
import Modal from './Modal';
import './ImageGallery.css';

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
  '/images/image6.jpg',
  '/images/image7.jpg',
  '/images/image8.jpg',
  '/images/image9.jpg',
  '/images/image10.jpg',
  '/images/image11.jpg',
  '/images/image12.jpg',
  '/images/image13.jpg',
  '/images/image14.jpg',
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <div>
      <div className="image-gallery">
        {images.map((image, index) => (
          <Image key={index} src={image} openModal={() => openModal(image)} />
        ))}
      </div>
      {selectedImage && (
        <Modal
          src={selectedImage}
          closeModal={closeModal}
          nextImage={nextImage}
          prevImage={prevImage}
        />
      )}
    </div>
  );
};

export default ImageGallery;