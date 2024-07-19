import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/my_profile.jpg'
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image crop">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed Projects</small>
            </article>
          </div>
          <p>I'm Olufunmilayo, a skilled and
              creative Fullstack Web Developer with a passion for creating beautiful,
              responsive, and user-friendly websites. I've worked on a variety of
              web projects, ranging from personal blogs to e-commerce platforms.
</p>
          <a href="#contact" className="btn btn-primary">Say hi</a>
        </div>
      </div>
    </section>
  )
}

export default Intro