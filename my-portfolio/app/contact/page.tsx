import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div className='contact'>
      
      <h2>Get in touch</h2>
      <p>feel free to contact ne about anything related to web development</p>
      <form className="contact-form">
        <div className="input-area">
          <input type="text" placeholder="Your name" />
        </div>
        <div className="input-area">
          <input type="email" placeholder="Email address" />
        </div>
        <div className="input-area">
          <input type="text" placeholder="Subject" />
        </div>
        <div className="input-area h-80">
          <textarea placeholder="Your message"></textarea>
        </div>
        <button className="sendbtn">Send</button>
      </form>
      <nav className ='nav'>
      <ul>
    
         <Link href="/about">About</Link>
         <Link href="/projects">Projects</Link>
      </ul>
  
      </nav>
     
    </div>
  )
}

export default page
