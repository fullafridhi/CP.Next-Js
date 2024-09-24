import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
const page = () => {
  return (
    <div className='portfolio-card'>

<Image
  className="profile-image"
  src="/alacia.jpg"
  alt="Profile picture of Alacia"
  width={150}
  height={150}
/>

<p className='profileImage'>
      Hello! I'm Alicia Sykes, a passionate developer with a strong enthusiasm for crafting innovative and user-friendly applications. With a background in  web development, I specialize in building solutions that not only meet user needs but also enhance their overall experience.</p>
      <h1 className='approach'>My Approach</h1>
      <p>I believe in the importance of clean, efficient code and the power of collaboration. I thrive in team environments where ideas can be shared and transformed into tangible products. My problem-solving mindset drives me to tackle challenges head-on, ensuring that I deliver high-quality solutions on time.</p>
      <nav className ='nav'>
    <ul>
  
       
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
</ul>

    </nav>

    </div>
  )
}

export default page
