import React from 'react';
import './GalleryCard.css';

function GalleryCard({ title, address, imageLeft, imageRight }) {
  return (
    <div className='gallery-card'>
      <div className='card-images'>
        <img src={imageLeft} alt='imageLeft' />
        <img src={imageRight} alt='imageRight' />
      </div>
      <div className='card-text'>
        <p className='card-title'>{title}</p>
        <p className='card-address'>/</p>
        <p className='card-address'>{address}</p>
      </div>
    </div>
  );
}

export default GalleryCard;
