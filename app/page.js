import Image from 'next/image'
import Hero from './components/Hero'
import NavBer from './components/NavBer'
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Project'


export default function Home() {
  return (
   <div className='flex min-h-screen flex-col bg-[#121212] '>
     <NavBer/>
    <div className='container pt-12 mx-auto px-12 '>
    <Hero/>
    <About/>
    
    </div>
    <div className='pt-48 md:pt-0 mt-96 md:mt-0'>
    <Project/>
    <Contact/>
    </div>
   
  
   
   </div>
  )
}
