import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, largeImage, onClick, alt }) => (
  <li className="ImageGalleryItem" onClick={() => onClick(largeImage)}>
    <img src={webformatURL} alt={alt} className="ImageGalleryItem-image" />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
