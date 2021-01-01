import React from 'react'

export default function Edu() {
  return (
    <div className='edu'>
      <div className='edu-header'>
        Education
      </div>
      <div className='edu-container'>
        <div className='edu-item'>
          <p className='year'>2019-2020</p>
          <p className='school'>Lambda School</p>
          <p className='deg'>Bootcamp</p>
          <p className='major'>Full Stack Web Development</p>
        </div>

        <div className='edu-item'>
          <p className='year'>2009-2011</p>
          <p className='school'>Kalamazoo Valley Community College</p>
          <p className='deg'>Associates Degree</p>
          <p className='major'>Computer Science</p>
        </div>
                
        <div className='edu-item'>
          <p className='year'>2007-2009</p>
          <p className='school'>Michigan State University</p>
          <p className='deg'>Certification/Trade School</p>
          <p className='major'>Electrical Technology</p>
        </div>
      </div>
    </div>
  )
}
