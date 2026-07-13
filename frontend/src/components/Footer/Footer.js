import React from 'react';
import './Footer.css';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import FooterBg from '../../images/background-footer.png';

function Footer() {
  return (
    <div>
      <footer className='footer'>
        <Logo />
        <img src={FooterBg} alt='backgroundFooter' />
      </footer>
    </div>
  );
}

export default Footer;
