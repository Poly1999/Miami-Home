import React from 'react';
import './Header.css';

import { ReactComponent as Burger } from '../../assets/burger.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Phone } from '../../assets/phone.svg';

function Header() {
  return (
    <header>
      <div className='container'>
        <div className='header-container'>
          <Burger />
          <Logo />
          <Phone />
        </div>
      </div>
    </header>
  );
}

export default Header;
