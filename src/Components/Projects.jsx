import React from 'react';
import './style.css';
import project1 from './images/project-1.png';

import project3 from './images/project-3.png';

import project5 from './images/project-5.png';
import project6 from './images/project-6.png';
const Projects = (props) => {
  return     <section className={`teams ${props.mode?'':'temp'}`} id="teams">
  <div className="max-width">
      <h2 className="title">My Projects</h2>
      <div className="carousel owl-carousel">
          <div className="card">
              <div className="box">
                  <img src={project1} alt=""/>
                  <div className="text"><a href='https://github.com/aniruddhadhal/Habit'>Habit Tracker</a></div>
                  <p>This is a dynamic website using Expressjs and Mongodb. </p>
              </div>
          </div>
          
          <div className="card">
              <div className="box">
                  <img src={project3} alt=""/>
                  <div className="text"><a href='https://github.com/aniruddhadhal/e-commerce'>Ecommerce Website</a></div>
                  <p>This is a full stack Ecommerce website using Reactjs .</p>
              </div>
          </div>
          
          <div className="card">
              <div className="box">
                  <img src={project5} alt=""/>
                  <div className="text"><a href='https://github.com/aniruddhadhal/SuperHero'>SuperHero Api</a></div>
                  <p>An api based web app using HTML CSS and javascript.</p>
              </div>
          </div>
          <div className="card">
              <div className="box">
                  <img src={project6} alt=""/>
                  <div className="text"><a href='https://github.com/aniruddhadhal/tic_tac_toe'>Tic Tac Toe</a></div>
                  <p>This is a gaming gwebsite,where one user can play their account game.</p>
              </div>
          </div>
      </div>
  </div>
</section>  ;
};

export default Projects;
