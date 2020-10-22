import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

export default function Code() {
  return (
    <div className='repo-links'>
      <a 
        href='https://github.com/stgary/resumev3' 
        title='Front End Ropo' 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Client
      </a>
      <a 
        href='https://github.com/stgary/resume-backend' 
        title='Back End Ropo' 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Server
      </a> 
    </div>
  )
}
