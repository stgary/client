import React from 'react'
import CV  from '../pdf/stgary.docx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faLinkedinIn,
  faFacebook,
  faTwitter,
  faGithub 
} from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <div className='header'>
      <p className='header-name'>Hey, I'm Steve!</p>
      <p className='header-title'>You can follow me on</p>
      <div className='icon-container'>
        <a href='https://github.com/stgary'>
          <FontAwesomeIcon className='icon' icon={faGithub} />
        </a>

        <a href='https://www.linkedin.com/in/sgary0'>
          <FontAwesomeIcon className='icon' icon={faLinkedinIn} />
        </a>

        <a href='https://twitter.com/explore'>
          <FontAwesomeIcon className='icon' icon={faTwitter} />
        </a>
        
        <a href='https://m.facebook.com/stephen.gary.566'> 
          <FontAwesomeIcon className='icon' icon={faFacebook} />
        </a> 
      </div>
      <div className='header-links'>
        <a
          className='link' 
          href='https://github.com/stgary/resumev3' 
          title='Front End Ropo' 
          target="_blank" 
          rel="noopener noreferrer"
        >
          React Repo
        </a>
        <a 
          href={CV}
          className='link' 
          title='pdf download' 
          download
        >
          Download CV
        </a>
        <a 
          className='link'
          href='https://github.com/stgary/resume-backend' 
          title='Back End Ropo' 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Node Repo
        </a> 
      </div>
    </div>
  )
}
