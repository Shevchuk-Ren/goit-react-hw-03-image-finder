import React from 'react';

const ImageGalleryItem = ({ webformatURL, largeImage, onClick, tags }) => (
  <li className="ImageGalleryItem" onClick={() => onClick(largeImage)}>
    <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
  </li>
);
export default ImageGalleryItem;
