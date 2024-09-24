import React from 'react'
import Link from 'next/link'


export default function projectList(){
const projectList = [
  {
    title: ' Programming Languages',
    description: 'Proficiency in languages such as Python, Java, JavaScript, C++, or Ruby is crucial for writing code and building applications.',
    
  },
  {
    title: 'Front-End Development',
    description: ' Proficiency in HTML, CSS, and JavaScript for creating user interfaces and ensuring a good user experience.',
    
  },
  {
    title: 'Back-End Development',
    description: ' Knowledge of server-side technologies and frameworks for managing application logic and database interactions.',
    
  },
  {
    title: 'Cloud Computing',
    description: '  Knowledge of cloud platforms (e.g., AWS, Azure, Google Cloud) for deploying and managing applications in a scalable environment',
    
  },

];
  
 return (
  <div className='container'>
    <h4>My Projects</h4>
    <ul className='myProject'>
      {projectList.map((project) => (
        <li key={project.title}>
          <h3 className='title'>{project.title}</h3>
          <p className='descreption'>{project.description}</p>
        </li>
         
      ))}
       </ul>
      
      <nav className ='nav'>
      <ul>
    
         <Link href="/about">About</Link>

          <Link href="/contact">Contact</Link>
      </ul>
  
      </nav>
  </div>
);
};



