import React from 'react';
import Profile from '../img/pic42.png';
import CV  from '../pdf/sg.pdf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <div className='about'>
      <div className='about-header'>
        <div className='about-title'>
          About
        </div>
        <div className='cv'>CV 
          <a href={CV} download>
            <FontAwesomeIcon className='dl' icon={faDownload} />
          </a>
        </div>
      </div>
      <div className='about-container'>
        <img className='about-img' src={Profile} alt='profile for stephen gary' />
        <div className='about-para'>
          <p className='para'> 
            Full stack developer who's passionate about creating intuitive 
            simple solutions to complex problems. I've worked in multiple 
            industries with distinct roles and had a great amount of success.
          </p>
          <p className='para'>
            I'm a tireless seeker of knowledge, an occasional purveyor 
            of wisdom and as luck would have it I'm available for hire. 
            Feel free to contact me about any opportunities!   
          </p>
        </div>
      </div>
    </div>
  )
}
