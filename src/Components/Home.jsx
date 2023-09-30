import React from 'react';
import './style.css';
import Photo from './images/poster.jpg'

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Aniruddha Dhal</div>
          <div className="text-3">And I'm a <span className="typing"></span></div>
          
        </div>
        <div className="circle">
        <img src={Photo} alt="poster" />

        </div>
      </div>
    </section>
  );
};

export default Home;
