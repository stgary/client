import React from 'react'

import Login from '../img/login.png';
import Chat from '../img/chat.jpg';
import Habit from '../img/habit.png';

export default function Projects() {
  return (
    <div className='projects'>
      <div className='projects-header'>
        Projects
      </div>
      <div className='projects-container'>
        <div className='project'>
          <a href='/'>
            <img className='project-img' src={Login} alt='material ui' />
          </a>
          <p className='project-title'>MaterialUI</p>
          <p className='project-desc'>Login and Sign up page</p>
        </div>
        <div className='project'>
          <a href='https://chat-app-fgcfhrvdn.vercel.app/'>
            <img className='project-img' src={Chat} alt='realtime chat application' />
          </a>
          <p className='project-title'>Realtime Chat Application</p>
          <p className='project-desc'>React, Express, Node and Socket.IO</p>
        </div>
        <div className='project'>
          <a href='/'>
            <img className='project-img' src={Habit} alt='material ui' />
          </a>
          <p className='project-title'>Productivity App</p>
          <p className='project-desc'>React, Express, Node and PostgreSql</p>
        </div>
      </div>
    </div>
  )
}
