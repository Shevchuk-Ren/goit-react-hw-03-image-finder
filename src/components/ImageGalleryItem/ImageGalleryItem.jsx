import React from 'react';

const ImageGalleryItem = ({ webformatURL, largeImage, onClick }) => (
  <li className="ImageGalleryItem" onClick={() => onClick(largeImage)}>
    <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
  </li>
);
export default ImageGalleryItem;
