import React from 'react';
import './TestimonialCard.css';

function TestimonialCard({ name, position, photo, text }) {
  return (
    <div className='testimonial-card'>
      <img src={photo} alt='testimonialPhoto' />
      <div className='testimonial-box'>
        <p className='testimonials-name'>{name}</p>
        <p className='testimonials-position'>{position}</p>
        <p className='testimonials-text'>{text}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
