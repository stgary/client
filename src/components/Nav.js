import React from 'react'
import CV  from '../pdf/sg.pdf';


export default function Nav() {
  return (
    <div className='nav'>
      <a href='https://github.com/stgary/resumev3' className='item' target='_blank' rel="noopener noreferrer">FE Code</a>
      <a href='https://github.com/stgary/resume-backend' className='item' target="_blank" rel="noopener noreferrer">BE Code</a>
      <a href={CV} className='item' download>Download CV</a>
    </div>
  )
}
