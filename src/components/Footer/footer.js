import React from 'react'
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'

const Footer = () => {

  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  return (
    <footer className='footer'>
       <div className="footer__socials">
      <a href="https://www.linkedin.com/in/oluphunmmy/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/oluphunmmy" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Oluphunmmy {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
