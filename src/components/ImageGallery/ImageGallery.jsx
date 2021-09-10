import React from 'react';

const ImageGallery = ({ gallery }) => (
  <ul className="ImageGallery">
    {gallery &&
      gallery.map(({ id, webformatURL, largeImageURL }) => (
        <li className="ImageGalleryItem" key={id}>
          <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
        </li>
      ))}
    {/* <li className="ImageGalleryItem">
   
      <img src="" alt="" className="ImageGalleryItem-image" />
    </li>
    <li className="ImageGalleryItem">
      <img src="" alt="" className="ImageGalleryItem-image" />
    </li> */}
  </ul>
);

export default ImageGallery;
