import React from 'react';
import './Contact.css';

import { ReactComponent as Title } from '../../assets/title.svg';

function Contact() {
  return (
    <div className='container'>
      <div className='title-container'>
        <h2>Contact us</h2>
        <Title />
      </div>
      <div className='contact-box'>
        <div className='contact-info'>
          <div className='phone-box'>
            <div className='info'>
              <p className='info-title'>Phone</p>
              <p className='info-text'>+1 234 5555-55-55</p>
            </div>
            <div className='info'>
              <p className='info-title'>Email</p>
              <p className='info-text'>hello@miami.com</p>
            </div>
          </div>
          <div className='info'>
            <p className='info-title'>Address</p>
            <p className='info-text'>
              400 First Ave N
              <br /> suite 700
              <br />
              Minneapolis, MN
              <br />
              55401
            </p>
          </div>
        </div>

        <div className='contact-form'>
          <form className='form'>
            <div className='form-inputs'>
              <input placeholder='Name' />
              <input placeholder='Email' />
              <textarea placeholder='Message' className='message-input' />{' '}
            </div>

            <button className='contact-button'>Consultation</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
