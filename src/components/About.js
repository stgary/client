import React from 'react';
import Profile from '../img/pic42.png';

export default function About() {
  return (
    <div className='about'>
      <div className='about-header'>
        About
      </div>
      <div className='about-container'>
        <img 
          className='about-img' 
          src={Profile} 
          alt='profile for stephen gary' 
        />
        <div className='about-info'>
          <div className='about-desc'>
            <p className='name'>Stephen Gary</p>
            <p className='full-stack'>Full Stack Developer</p>
          </div>
          <div className='about-para'>
            <p className='para'> 
              Programming has been a passion of mine for over a decade. I've worked in multiple 
              industries with distinct roles and had a great amount of success. I have a penchant
              for solving puzzles and problems and can fix just about anything with a laptop and a multimeter.   
            </p>
            <p className='para'>
              Lately I've been building full stack javascript applications with React and Node. If you want to checkout 
              some of my projects and learn more about me, keep scrolling. If you're here just to grab my CV, you can 
              download it using the link above.             
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
