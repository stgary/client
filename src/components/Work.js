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
            <p className='year'>2011-2012</p>
            <p className='company'>Challenge MFG</p>
            <p className='position'>Robotic Programmer</p>
          </div>
          <div className='work-para'>
            Challenge Mfg. is an automotive parts manufacturer. 
            My job consisted of electrical maintenance and robotic programming.
          </div>
        </div>
        <div className='work-group'>
          <div className='work-item'>
            <p className='year'>2012-2013</p>
            <p className='company'>Traumasoft</p>
            <p className='position'>Web Developer</p>
          </div>
          <div className='work-para'>
            Traumasoft Built a call intake system for ambulances and web applications. 
            My job consisted of using HTML, CSS, and JavaScript for the design and modification of web applications.
          </div>
        </div> 
        <div className='work-group'>
          <div className='work-item'>
            <p className='year'>2013-2014</p>
            <p className='company'>Benteler Automotive</p>
            <p className='position'>Robotic Programmer</p>
          </div>
          <div className='work-para'>
            Benteler is an automotive parts manufacturer. My job consisted of 
            electrical maintenance and robotic programming.
          </div>
        </div>
        <div className='work-group'>
          <div className='work-item'>
            <p className='year'>2014-2017</p>
            <p className='company'>Vijon laboratories</p>
            <p className='position'>PLC Programmer</p>
          </div>
          <div className='work-para'>
            Vijon is a major manufacturer of cleaning and cosmetic products. 
            My job consisted of electrical maintenance, PLC programming, integration, and installation.
          </div>
        </div>
        <div className='work-group'>
          <div className='work-item'>
            <p className='year'>2017-2019</p>
            <p className='company'>Clemens Food Group</p>
            <p className='position'>Electronics Tech</p>
          </div>
          <div className='work-para'>
            Clemens is the fifth largest pork producer in the world. My job consisted of electrical
            maintenance, PLC programming, device calibration, and project work.
          </div>
        </div>
      </div>
    </div>
  )
}
