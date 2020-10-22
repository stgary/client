import React from 'react'

export default function Edu() {
  return (
    <div className='edu'>
      <div className='edu-header'>
        Education
      </div>
      <div className='edu-container'>
        <div className='edu-item'>
          <p className='year'>2007-2009</p>
          <p className='school'>MSU</p>
          <p className='major'>Electrical Tech</p>
        </div>

        <div className='edu-item'>
          <p className='year'>2019-2020</p>
          <p className='school'>Lambda School</p>
          <p className='major'>Full Stack Development</p>
        </div>

        <div className='edu-item'>
          <p className='year'>2009-2011</p>
          <p className='school'>KVCC</p>
          <p className='major'>Computer Science</p>
        </div>        
      </div>
    </div>
  )
}
