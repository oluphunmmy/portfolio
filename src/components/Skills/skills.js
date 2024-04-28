import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I'm Olufunmilayo, a skilled and
              creative web developer with a passion for creating beautiful,
              responsive, and user-friendly websites. I've worked on a variety of
              web projects, ranging from personal blogs to e-commerce platforms.
        </span>
        <div className='skillsBars'>
           <div className='skillBar'>
            <img src={UIDesign} alt='UIDesign' className='skillBarImg'></img>
            <div className='skillBarText'>
                <h2>UI/UX Design</h2>
                <p>This is a demo text, you can write your content here</p>
            </div>
           </div>

           <div className='skillBar'>
            <img src={WebDesign} alt='WebDesign' className='skillBarImg'></img>
            <div className='skillBarText'>
                <h2>Web Design</h2>
                <p>This is a demo text, you can write your content here</p>
            </div>
           </div>

           <div className='skillBar'>
            <img src={AppDesign} alt='AppDesign' className='skillBarImg'></img>
            <div className='skillBarText'>
                <h2>APP Design</h2>
                <p>This is a demo text, you can write your content here</p>
            </div>
           </div>
        </div>
        
    </section>
  )
}

export default Skills