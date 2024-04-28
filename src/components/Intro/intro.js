import React from 'react';
import './intro.css';
import bgimg from '../../assets/bgimg.png';
import hireme from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
    return (
       <section id='intro'>
        <div className='introcontent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Olufunmilayo</span><br/>a Web Developer</span>
            <p className='introPara'> I am a skilled Web developer with experience in creating visually appealing and user friendly websites</p>
            <Link><button className='btn'><img src={hireme} alt='Hire' className='btnImg' />Hire Me</button></Link>
        </div>
        <img src={bgimg} alt='profile' className='bgimg'/>
       </section>
    );
}

export default Intro;
