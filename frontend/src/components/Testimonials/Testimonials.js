import React from 'react';
import './Testimonials.css';

import { ReactComponent as Title } from '../../assets/title.svg';
import TestimonialCard from './TestimonialCard/TestimonialCard';

function Testimonials() {
  return (
    <div className='container'>
      <div className='title-container'>
        <h2>Testimonials</h2>
        <Title />
      </div>
      <div className='testimonial-list'>
        <TestimonialCard
          photo='https://via.placeholder.com/150x150'
          name='Leslie Mckinney'
          position='CEO'
          text='Nice work, Certificates National Association of Realtors (USA)'
        />
        <TestimonialCard
          photo='https://via.placeholder.com/150x150'
          name='Scarlett Hawkins'
          position='Senior Vice President'
          text='My soul is illuminated by an unearthly joy, as these beautiful spring morning, which I enjoy with all my heart'
        />
        <TestimonialCard
          photo='https://via.placeholder.com/150x150'
          name='Max Henry'
          position='Chief Design Officer'
          text='When my lovely valley of steam rises and half-day sun is above an impermeable'
        />
      </div>
    </div>
  );
}

export default Testimonials;
