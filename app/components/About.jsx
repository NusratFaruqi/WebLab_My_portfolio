'use state'
import React from 'react'
import Tab from './Tab'

function About() {

  
  return (
    <section id='About' className='h-screen text-white md:pt-16'>
      <div className='  md:grid md:grid-cols-2 items-center gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 '>
        <img src="/Nusu5.png" height={500} width={500} alt="" />
        <div>
        <h2 className='text-4xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4 text-center md:text-left pt-10 '>About Me</h2>
        <p className='text-base lg:text-lg text-center md:text-left'>I'm passionate about creativity and problem-solving. I love exploring new ideas andfinding solutions to tough problems as a researcher.As a content writer, I craft engaging stories and articles that people love. I create visually stunning designs as a graphicdesigner. And I make websites look and work great as a frontend developer. My journey has taught me the power of combining these skills to deliver remarkable results. I'm always eager to embrace new challenges and collaborate on projects that push the boundaries of creativity and technology.</p>
        <div className='flex flex-row mt-8 justify-start'>
         <Tab/>
        </div>
        </div>
      </div>
    </section>
  )
}

export default About