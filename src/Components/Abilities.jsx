import React from 'react';
import './style.css';
const Abilities = (props) => {
  return  <section className={`services ${props.mode?'':'temp'}`} id="services">
  <div className="max-width">
      <h2 className="title">My Abilities</h2>
      <div className="serv-content">
          <div className="card">
              <div className="box">
                  <i className="fas fa-globe"></i>
                  <div className="text">Web Development</div>
                  <p>I am working on web 2.0 technology and designed various of full stack websites.</p>
              </div>
          </div>
          <div className="card">
              <div className="box">
                  <i className="fas fa-terminal"></i>
                  <div className="text">Problem Solving</div>
                  <p>This ability helps me in different situation to overcome the problem like in data science.</p>
              </div>
          </div>
          <div className="card">
              <div className="box">
                  <i className="fas fa-code"></i>
                  <div className="text">Programming</div>
                  <p>I am using different programming languages and having little understanding of OOP</p>
              </div>
          </div>
         </div>
  </div>
</section>;
};

export default Abilities;
