import React from 'react';
import './BurgerMenu.css';

import { ReactComponent as Close } from '../../assets/burgerClose.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';

function BurgerMenu({ onClose }) {
  return (
    <div className='burger-container'>
      <div className='container'>
        <div className='burger-header'>
          <Close onClick={onClose} />
          <Logo />
        </div>

        <div className='burger-box'>
          <ul className='burger-list'>
            <li className='burger-item'>Home</li>
            <li className='burger-item'>About Us</li>
            <li className='burger-item'>Gallery</li>
            <li className='burger-item'>Testimonials</li>
            <li className='burger-item'>Contacts</li>
          </ul>
          <div className='burger-contact'>
            <p className='burger-phone'>+1 234 555-55-55</p>
            <button className='burger-buttton'>Call to order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
