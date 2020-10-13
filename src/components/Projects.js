import React from 'react'

export default function Projects() {
  return (
    <div className='projects'>
      <div className='projects-header'>
        Projects
      </div>
      <div className='projects-container'>
        <div className='project'>
          <p className='project-title'>MaterialUI</p>
          <a href='/'>
            <img className='project-img' src={} alt='material ui' />
          </a>
          <p className='project-desc'>Login and Sign up page made with MaterialUI</p>
        </div>
        <div className='project'>
          <p className='project-title'>Realtime Chat Application</p>
          <a href='https://chat-app-fgcfhrvdn.vercel.app/'>
            <img className='project-img' src={} alt='realtime chat application' />
          </a>
          <p className='project-desc'>React, Express, Node and Socket.IO</p>
        </div>
        <div className='project'>
          <p className='project-title'>Habit Tracker and Scheduler</p>
          <a href='/'>
            <img className='project-img' src={} alt='material ui' />
          </a>
          <p className='project-desc'>Productivity app made with Node, Express and React</p>
        </div>
      </div>
    </div>
  )
}
