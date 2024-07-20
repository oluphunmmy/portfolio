import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png'; // Add your menu icon
import AnchorLink from 'react-anchor-link-smooth-scroll';
import underline from '../../assets/nav_underline.svg';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    return (
        <div className='navbar'>
            <img src={logo} alt='Logo' className='logo' />

            <ul className={`nav-menu ${mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}`}>
                <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu('home')}>
                    Home</p></AnchorLink>
                    {menu === 'home' && <img src={underline} alt='' />}
                </li>
                <li><AnchorLink className='anchor-link' offset={70} href='#about'><p onClick={() => setMenu('about')}>
                    About Me</p></AnchorLink>
                    {menu === 'about' && <img src={underline} alt='' />}
                </li>
                <li><AnchorLink className='anchor-link' offset={80} href='#skills'><p onClick={() => setMenu('skills')}>
                    Services</p></AnchorLink>
                    {menu === 'services' && <img src={underline} alt='' />}
                </li>
                <li><AnchorLink className='anchor-link' offset={50} href='#portfolio'><p onClick={() => setMenu('portfolio')}>
                    Portfolio</p></AnchorLink>
                    {menu === 'portfolio' && <img src={underline} alt='' />}
                </li>
                <li><AnchorLink className='anchor-link' offset={355} href='#contact'><p onClick={() => setMenu('contact')}>
                    Contact Me</p></AnchorLink>
                    {menu === 'contact' && <img src={underline} alt='' />}
                </li>
            </ul>
            <div className='nav-connect'><AnchorLink className='anchor-link' offset={355} href='#contact'>Connect With Me</AnchorLink></div>
                        <img src={menu_icon} alt='Menu' className='menu-icon' onClick={toggleMenu} />
        </div>
    );
}

export default Navbar;
