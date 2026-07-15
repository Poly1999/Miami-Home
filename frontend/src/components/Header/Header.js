import React, { useState } from 'react';
import './Header.css';

import { ReactComponent as Burger } from '../../assets/burger.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Phone } from '../../assets/phone.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className='container'>
        <div className='header-container'>
          <Burger onClick={() => setIsOpen(true)} />
          <Logo />
          <Phone />
        </div>
      </div>
      {isOpen && <BurgerMenu />}
      {isOpen && <BurgerMenu onClose={() => setIsOpen(false)} />}
    </header>
  );
}

export default Header;
