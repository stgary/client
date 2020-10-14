import React from 'react'

export default function Contact() {
  return (
    <div className='contact'>
      <div className='contact-header'>
        Contact
      </div>
      <div className='contact-container'>
        <form>
          <input
            name='name'
            type='text'
            value=''
            onChange=''
            placeholder='Name'
          />
          <input
            name='email'
            type='email'
            value=''
            onChange=''
            placeholder='Email'
          />
          <input
            name='subject'
            type='text'
            value=''
            onChange=''
            placeholder='Subject'
          />
          <input
            name='message'
            type='textarea'
            value=''
            onChange=''
            placeholder='Message'
          />
          <button
            name='send'
            type='submit'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
