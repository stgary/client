import React from 'react'
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
      <p className='header-name'>I am Stephen Gary</p>
      <p className='header-title'>Web Developer</p>
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
    </div>
  )
}
