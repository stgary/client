import React from 'react'
import Profile from '../img/pic42.png'

export default function About() {
  return (
    <div className='about'>
      <div className='about-header'>
        About
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
          </p>
        </div>
      </div>
    </div>
  )
}
