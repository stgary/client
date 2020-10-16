import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const { register, handleSubmit, errors, reset } = useForm();
  const END_POINT = 'https://resume-bkend.herokuapp.com/send';
  
  const onSubmit = data => {
    axios 
      .post(END_POINT, data)
        .then(res => {
          console.log(res.data);
          alert('Your message has been sent!');
        })
        .catch(error => {
          console.log(error.message);
          alert('oops! there was an error. Please call, text or email me, Thanks.');
        });

    reset();
  }

  return (
    <div className='contact'>
      <div className='contact-header'>
        Contact
      </div>
      <div className='contact-info'>
        <div className='contact-container'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name='name'
              type='text'
              placeholder='You name...'
              ref={register({ required: true })}
            />
            <p className='error'>{errors.name && 'Name is required'}</p>

            <input
              name='email'
              type='email'
              placeholder='Your email...'
              ref={register({ required: true })}
            />
            <p className='error'>{errors.email && 'Email is required'}</p>

            <input
              name='subject'
              type='text'
              placeholder='Subject...'
              ref={register({ required: true })}
            />
            <p className='error'>{errors.subject && 'Subject is required'}</p>

            <textarea
              name='message'
              type='text'
              placeholder='Message...'
              ref={register({ required: true })}
            />
            <p className='error'>{errors.message && 'Message is required'}</p>

            <div className='btn-container'>
              <button
                name='send'
                type='submit'
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className='info'>
          <FontAwesomeIcon className='user-icon' icon={faUserCircle} />
          <p className='me'>Stephen Gary</p>
          <p>(615) 678-3231</p>
          <p>sgary0@protonmail.com</p>
          <p className='detroit'>Detroit, MI</p>
          <p className='relocate'>I am willing to relocate</p>
        </div>
      </div>
    </div>
  )
}
