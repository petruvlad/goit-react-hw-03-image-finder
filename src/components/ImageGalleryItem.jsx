// ImageGalleryItem.js
import React from 'react';

const ImageGalleryItem = ({ image, openModal }) => {
  return (
    <li className="gallery-item" onClick={() => openModal(image.largeImageURL)}>
      <img src={image.webformatURL} alt={image.id} />
    </li>
  );
};

export default ImageGalleryItem;
