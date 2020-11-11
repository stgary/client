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
            Work environment: Siemens Simatic 7 HMI's and PLC's. Siemens VFD. Massman palletizing. My duties 
            consisted of device calibration, installation, and maintenance.
          </div>
        </div>
        
        <div className='work-group'>
          <div className='work-item'>
            <p className='year'>2014-2017</p>
            <p className='position'>PLC Programmer</p>
            <p className='company'>Vijon laboratories</p>
          </div>
          <div className='work-para'>
            Work environment: Allen Bradley HMI's, PLC5, SLC500, Micrologix, Controllogix. 
            Rxlogix500, 5000, and studio5000. Yaskawa and Powerflex VFD, Baldor and SEW motors,
            Massman palletizing and LanFranchi bottling systems. My duties consisted of PLC programming,
            device integration and electrical maintenance.    
          </div>
        </div>

        <div className='work-group'>
          <div className='work-item'>
            <p className='year'>2013-2014</p>
            <p className='position'>Robotic Programmer</p>
            <p className='company'>Benteler Automotive</p>
          </div>
          <div className='work-para'>
            Work environment: Siemens Simatic 7 HMI's and PLC's. Fanuc, Motoman and ABB Robotics. Miller, Lincoln, and WTC weld units. My duties 
            consisted of Robotic programming and maintenance.
          </div>
        </div>

        <div className='work-group'>
          <div className='work-item'>
            <p className='year'>2012-2013</p>
            <p className='position'>Web Developer</p>
            <p className='company'>Traumasoft</p>
          </div>
          <div className='work-para'>
            Work environment: EmberJS, BackboneJS, mustacheJS, HTML5, CSS3 and PHP. My duties consisted of design 
            and modification of web applications.
          </div>
        </div> 

        <div className='work-group'>   
          <div className='work-item'>
            <p className='year'>2011-2012</p>
            <p className='position'>Robotic Programmer</p>
            <p className='company'>Challenge MFG</p>
          </div>
          <div className='work-para'>
            Work environment: Allen Bradley HMI's, Controllogix and Micrologix. Fanuc, Motoman and ABB Robotics. Lincoln and WTC welding units. My duties 
            consisted of Robotic programming and maintenance.
          </div>
        </div>
      </div>
    </div>
  )
}
