import React from 'react'

import Login from '../img/login.png';
import Chat from '../img/chat.jpg';
import Habit from '../img/habit.png';
import Spotify from '../img/spotifyapi.jpg';

export default function Projects() {
  return (
    <div className='projects'>
      <div className='projects-header'>
        Projects
      </div>
      <div className='projects-container'>
        <div className='project'>
          <a href='https://github.com/BuildWeek-SpotifySongSuggestor/back-end' target="_blank" rel="noopener noreferrer" title='productivity application'>
            <img className='project-img' src={Spotify} alt='spotify api' />
          </a>
          <p className='project-title'>Spotify API</p>
          <p className='project-desc'>Express, Node and PostgreSql</p>
        </div>

        <div className='project'>
          <a href='https://chat-app-fgcfhrvdn.vercel.app/' target="_blank" rel="noopener noreferrer" title='chat application'>
            <img className='project-img' src={Chat} alt='realtime chat application' />
          </a>
          <p className='project-title'>Realtime Chat Application</p>
          <p className='project-desc'>React, Express, Node and Socket.IO</p>
        </div>
        
        <div className='project'>
          <a href='https://daily-planner-ten.vercel.app/calendar' target="_blank" rel="noopener noreferrer" title='Schedular and Visualization'>
            <img className='project-img' src={Habit} alt='Calendar' />
          </a>
          <p className='project-title'>Scheduling App</p>
          <p className='project-desc'>React, Express, Node and PostgreSql</p>
        </div>

        <div className='project'>
          <a href='/' target="_blank" rel="noopener noreferrer" title='login page'>
            <img className='project-img' src={Login} alt='material ui' />
          </a>
          <p className='project-title'>MaterialUI</p>
          <p className='project-desc'>Login and Sign up page</p>
        </div>
      </div>
    </div>
  )
}
