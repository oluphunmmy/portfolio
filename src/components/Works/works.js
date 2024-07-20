import React from 'react';
import IMG1 from '../../assets/bookstore1.jpg';
import IMG2 from '../../assets/Edusity.png';
import IMG3 from '../../assets/Todo_list.png';
import './works.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'A Bookstore WebApp',
      img: IMG1,
      description:
        'An e-bookstore, with multiple users, that requires every user authorisation to create a new book, using react + nodejs.',
      technologies: 'React | Tailwind CSS | NodeJs | ExpressJs | MongoDB',
      link: 'https://my-bookstore-frontend.netlify.app/',
      github: 'https://github.com/oluphunmmy/frontend',
    },
    {
      id: 2,
      title: 'Edusity WebApp',
      img: IMG2,
      description:
        'A responsive school Web App built using  React, Tailwind and Css',
      technologies: 'React | CSS',
      link: 'https://edusitywebapp.vercel.app/',
      github: 'https://github.com/oluphunmmy/frontend--univelcity-',
    },
    {
      id: 3,
      title: 'Todo-List App',
      img: IMG3,
      description: "A Todo-list App built using React, TailwindCss, NodeJs, Express and MongoDB.  It can be used by many registered users making use of their different login accounts",
      technologies: 'ReactJs | Tailwind | NodeJs | Express Js |  MongoDB ',
      link: 'https://single-user-todo.netlify.app/',
      github: 'https://github.com/oluphunmmy/To-do_list',
    }
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Source Code
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Preview
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;