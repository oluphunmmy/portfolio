import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactme from '../../assets/contact.png';
import {Link} from 'react-scroll';
import Menu from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className='navbar'>
            <img src={logo} alt='Logo' className='logo'/>
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenulistItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenulistItem" >About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenulistItem" >Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-70} duration={500} className="desktopMenulistItem">Clients</Link>
                
            </div>
            <button className='desktopMenuBtn' onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactme} alt='Contactme' className='desktopMenuimg'/> Contact Me
            </button>

            <img src={Menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navmenu" style={{display: showMenu? 'flex': 'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-70} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Clients</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar
