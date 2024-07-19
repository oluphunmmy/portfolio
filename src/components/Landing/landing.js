import React from 'react';
import CTA from './CTA';
import HeaderSocials from './landingSocials';
import './landing.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello!👋🏼 I'm</h5>
        <h1>Olufunmilayo Busari</h1>
        <h5 className="text-light">A Full-stack Web Developer with experience in creating visually appealing and user friendly websites</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;