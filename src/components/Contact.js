import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';

const END_POINT = process.env.END_POINT || 'https://resume-bkend.herokuapp.com/send';

export default function Contact() {
  const [ confirm, setConfirm ] = useState(false);
  const [ err, setErr ] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm();
  
  const onSubmit = data => {
    axios 
      .post(END_POINT, data)
        .then(res => {
          setConfirm(!confirm);
          console.log(res.data);
        })
        .catch(error => {
          setErr(!err);
          console.log(error.message);
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
              placeholder='Your name...'
              ref={register({ required: true })}
            />
            <p className='error'>{errors.name && 'Name is a required field!'}</p>

            <input
              name='email'
              type='email'
              placeholder='Your email...'
              ref={register({ required: true })}
            />
            <p className='error'>{errors.email && 'Email is a required field!'}</p>

            <input
              name='subject'
              type='text'
              placeholder='Subject...'
              ref={register({ required: true })}
            />
            <p className='error'>{errors.subject && 'Subject is a required field!'}</p>

            <textarea
              name='message'
              type='text'
              placeholder='Message...'
              ref={register({ required: true })}
            />
            <p className='error'>{errors.message && 'Message is a required field'}</p>

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
          <p className='me'>Stephen Gary</p>
          <p>(615) 678-3231</p>
          <p>sgary0@protonmail.com</p>
          <p className='detroit'>Detroit, MI</p>
          <p className='relocate'>I am willing to relocate</p>
        </div>
      </div>
      <div className='message-display'>
        {!confirm && !err  && 
          <div className='wait-message'>
            This app is deployed using a Heroku free account which gets placed into idle. 
            The response time can be delayed up to 14 seconds. If you want to wait for confirmation 
            there will be a corresponding message upon failure or success.
          </div>
        }

        {confirm && 
          <div className='confirmation'>
            Message received! I'll follow up shortly.  
          </div>
        }

        {err && 
          <div className='failure'>
            Failure to send. Please call, text or email me using the contact info above.
          </div>
        }
      </div>
    </div>
  )
}
