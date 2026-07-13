import React from 'react';
import './Gallery.css';

import { ReactComponent as Title } from '../../assets/title.svg';
import GalleryCard from './GalleryCard/GalleryCard';

function Gallery() {
  return (
    <div className='container'>
      <div className='title-container'>
        <h2>Gallery</h2>
        <Title />
      </div>
      <GalleryCard
        title='Title Title'
        address='Miami Miami, Fl 33139'
        imageLeft='https://via.placeholder.com/400x300'
        imageRight='https://via.placeholder.com/200x300'
      />
      <GalleryCard
        title='Title Title'
        address='Miami Miami, Fl 33139'
        imageLeft='https://via.placeholder.com/400x300'
        imageRight='https://via.placeholder.com/200x300'
      />
      <GalleryCard
        title='Title Title'
        address='Miami Miami, Fl 33139'
        imageLeft='https://via.placeholder.com/400x300'
        imageRight='https://via.placeholder.com/200x300'
      />
      <GalleryCard
        title='Title Title'
        address='Miami Miami, Fl 33139'
        imageLeft='https://via.placeholder.com/400x300'
        imageRight='https://via.placeholder.com/200x300'
      />
      <GalleryCard
        title='Title Title'
        address='Miami Miami, Fl 33139'
        imageLeft='https://via.placeholder.com/400x300'
        imageRight='https://via.placeholder.com/200x300'
      />
      <div className='button-wrapper'>
        <button className='button-all'>View all</button>
      </div>
    </div>
  );
}

export default Gallery;
