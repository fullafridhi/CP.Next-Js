import image from'next/image'
import Link from 'next/link'


export default function Home() {
  return (
   
  <main className='background-image'>
    <div className='card'>
    <h1 className='welcom'>Welcom to my porfolio </h1>
    <nav className ='nav'>
    <ul>
  
       <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
</ul>

    </nav>
    </div>
  </main>

  );
};