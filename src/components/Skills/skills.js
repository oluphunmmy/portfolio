import React from 'react';
import Skills from './skills_icon';
import './skills.css';

const Experience = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
            <Skills skill="Html5"/>
            <Skills skill="CSS3"/>
            <Skills skill="JavaScript"/>
            <Skills skill="React"/>
            <Skills skill="ReduxVite"/>
            <Skills skill="Bootstrap"/>
            <Skills skill="Next.js"/>
            <Skills skill="TailWInd"/>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Back-end Development</h3>
          <div className="experience__content">
            <Skills skill="Node.js"/>
            <Skills skill="Python-Django"/>
            <Skills skill="ExpressJS"/>
            <Skills skill="SQL/MySQL"/>
            <Skills skill="MongoDB"/>
            <Skills skill="POSTGRESQL"/>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Others</h3>
          <div className="experience__content">
            <Skills skill="Python"/>
            <Skills skill="Linux/Bash"/>
            <Skills skill="Graphics Design"/>
            <Skills skill="Tailoring"/>
            <Skills skill="Git/Github"/>
            <Skills skill="General IT skills"/>
          
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience