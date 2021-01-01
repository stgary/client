import React from 'react'

export default function Work() {
  return (
    <div className='work'>
      <div className='work-header'>
        Work
      </div>
      <div className='work-container'>
        <div className='work-group'>
          <div className='work-item'>
            <p className='year'>2017-2019</p>
            <p className='position'>Electronics Tech</p>
            <p className='company'>Clemens Food Group</p>
          </div>
          <div className='work-para'>
            Device calibration, integration/installation and maintenance. Siemens electronics.
          </div>
        </div>
        
        <div className='work-group'>
          <div className='work-item'>
            <p className='year'>2014-2017</p>
            <p className='position'>PLC Programmer</p>
            <p className='company'>Vijon laboratories</p>
          </div>
          <div className='work-para'>
            PLC programming, device integration/installation and maintenance. Allen-Bradley electronics.     
          </div>
        </div>

        <div className='work-group'>
          <div className='work-item'>
            <p className='year'>2013-2014</p>
            <p className='position'>Robotic Programmer</p>
            <p className='company'>Benteler Automotive</p>
          </div>
          <div className='work-para'>
            Robotic programming and maintenance. ABB, Fanuc and Motoman Robotics.
          </div>
        </div>

        <div className='work-group'>
          <div className='work-item'>
            <p className='year'>2012-2013</p>
            <p className='position'>Web Developer</p>
            <p className='company'>Traumasoft</p>
          </div>
          <div className='work-para'>
            Design, coding and maintenance of web applications. Agile/Scrum work environment. JavaScript, HTML5, CSS3, MySql, PHP.
          </div>
        </div> 

        <div className='work-group'>   
          <div className='work-item'>
            <p className='year'>2011-2012</p>
            <p className='position'>Robotic Programmer</p>
            <p className='company'>Challenge MFG</p>
          </div>
          <div className='work-para'>
            Robotic programming and maintenance. ABB and Fanuc Robotics.
          </div>
        </div>
      </div>
    </div>
  )
}
