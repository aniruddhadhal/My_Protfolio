import React from 'react';
import './style.css';
import node from './images/nodejs.png';
import mongo from './images/mongo.png';
import react from './images/react.png';
import python from './images/python.png';
import cp from './images/c-programming.png';
import cpprog from './images/cpp.png';
import html from './images/html-5.png';
import css from './images/css3.png';
import js from './images/javascript--v1.png';
import php from './images/php-logo.png'
import sql from './images/mysql-logo.png';
import java from './images/java-coffee-cup-logo--v1.png';
const Skills = (props) => {
  return  <section className={`skills ${props.mode?'':'temp'}`} id="skills">
  <div className="max-width">
      <h2 className="title">My skills</h2>
      <div className="skills-content">
          <div className="column right">
              <div className="text">My creative skills.</div>
              <div className="bars">
                  <div className="info">
                      <span><img src={cp} alt='c-prog'/></span>
                      <span>Intermediate</span>
                  </div>
                  <div className="line c"></div>
              </div>
              <div className="bars">
                  <div className="info">
                      <span><img src={cpprog} alt='cpp'/></span>
                      <span>Intermediate</span>
                  </div>
                  <div className="line cpp"></div>
              </div>
              <div className="bars">
                  <div className="info">
                      <span><img src={java} alt='java'/></span>
                      <span>Intermediate</span>
                  </div>
                  <div className="line java"></div>
              </div>
              <div className="bars">
                  <div className="info">
                      <span><img src={python} alt='python'/></span>
                      <span>Beginner</span>
                  </div>
                  <div className="line python"></div>
              </div>
              <div className="bars">
                  <div className="info">
                      <span><img src={php} alt='php'/></span>
                      <span>Beginner</span>
                  </div>
                  <div className="line php"></div>
              </div>
              <div className="bars">
                  <div className="info">
                      <span><img src={sql} alt='sql'/></span>
                      <span>Beginner</span>
                  </div>
                  <div className="line sql"></div>
              </div>
              
              
              
              
      </div>
          <div className="column right">
              <div className="bars">
                  <div className="info">
                      <span><img src={html} alt='html'/></span>
                      <span>Intermediate</span>
                  </div>
                  <div className="line html"></div>
                  
              </div>
              <div className="bars">
                  <div className="info">
                      <span><img src={css} alt='css'/></span>
                      <span>Intermediate</span>
                  </div>
                  <div className="line css"></div>
              </div>
              <div className="bars">
                  <div className="info">
                      <span><img src={js} alt='js'/></span>
                      <span>Intermediate</span>
                  </div>
                  <div className="line js"></div>
              </div>
              <div className="bars">
                  <div className="info">
                      <span><img src={node} alt='node'/></span>
                      <span>Intermediate</span>
                  </div>
                  <div className="line node"></div>
              </div>
              <div className="bars">
                  <div className="info">
                      <span><img src={mongo} alt='mongo'/></span>
                      <span>Intermediate</span>
                  </div>
                  <div className="line mongo"></div>
                  
              </div>
              <div className="bars">
                  <div className="info">
                      <span><img id="rotate" src={react} alt='react'/></span>
                      <span>Intermediate</span>
                  </div>
                  <div className="line react"></div>
              </div>
              
          </div>
      
  </div>
  </div>
</section>;
};

export default Skills;
