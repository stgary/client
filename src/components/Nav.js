import React from 'react'
import CV  from '../pdf/stgary.pdf';

export default function Nav() {
  return (
    <div className='nav'>
      <a 
        href='https://github.com/stgary/resumev3' 
        className='item' 
        target='_blank' 
        rel="noopener noreferrer"
      >
        React App
      </a>
      <a 
        href='https://github.com/stgary/resume-backend' 
        className='item' 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Node App
      </a>
      <a 
        href={CV}
        className='item' 
        title='pdf download' 
        download
      >
        Download CV
      </a>
    </div>
  )
}
