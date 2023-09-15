'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';
function Hero() {

  const [showToast, setShowToast] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    let countdownInterval;

    if (showToast) {
      countdownInterval = setInterval(() => {
        if (countdown > 1) {
          setCountdown(countdown - 1);
        } else {
          clearInterval(countdownInterval);
          setShowToast(false);
        }
      }, 1000);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [showToast, countdown]);

  const handleHireMeClick = () => {
    setShowToast(true);
    setCountdown(5); // Reset the countdown
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:nusratfaruqi64@gmail.com?subject=Hiring Inquiry&body=I would like to inquire about a job opportunity.';
  
  };


  return (
    <div id='Home'>
    <div  className='md:h-screen'>
        <div className='grid grid-cols-1 sm:gap-24 sm:grid-cols-12 lg:pt-24 pt-10 ' >
            <div className='col-span-7  place-self-center text-center sm:text-left order-1 '>
            <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl  font-extrabold'>
              <span className =' text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'> Hello, I'm {""}</span> 
              <br />
              <TypeAnimation
      sequence={[
       
        'Nusrat Faruqi',
        1000, 
        'Researcher',
        1000,
        'Content Writer',
        1000,
        'Frontend Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
            </h1>
            <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>Hello, I'm Nusrat Faruqi—a versatile professional with skills in research, content writing, graphic design, and front-end development. This portfolio showcases my diverse expertise and passion for creativity and functionality. Explore my work and join me on a journey through these roles.</p>
            <div>
               <button  onClick={handleHireMeClick} className='px-6 py-3 w-full sm:w-fit rounded-full mr-4  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 duration-100'>Hire Me</button> 

               {showToast && (
  <div className="fixed bottom-5 right-5 bg-gray-700 text-white py-2 px-4 rounded transition-transform duration-100">
    <div className="flex items-center ">
      <div className="w-5 h-5 ">
        <svg
          className="w-5 h-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M2 10a8 8 0 018-8V0a10 10 0 100 20v-2a8 8 0 01-8-8zm11-6a1 1 0 00-1 1v7a1 1 0 002 0V5a1 1 0 00-1-1z"
          />
        </svg>
      </div>
      <div >{countdown} Feel free to reach out! </div>
      <button
        onClick={handleEmailClick}
        className="ml-4 text-white  bg-gradient-to-r from-purple-300 to-purple-600 hover:bg-gradient-to-br font-bold py-1 px-2 rounded"
      >
         Email Me
      </button>
      
    </div>
  </div>
)}


               <button className='px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  w-full sm:w-fit hover:bg-slate-800 text-white  mt-3'>
                <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'><a href="https://drive.google.com/file/d/1VRZcfoDRTJkSEQYTxwkD8heHrE4buGQ0/view?usp=drive_link" target='_blank'>Download CV</a> </span></button> 
            </div>
            </div>
           <div className='col-span-5 place-self-center mt-4 lg:mt-0 pb-10 lg:pb-0'>
         <div className=' rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] relative '>
         <img className=' absolute transform -translate-x-1/2 -translate-y-1/2 lg:h-[500px] lg:w-[500px] top-1/2 left-1/2 h-[300px] w-[300px]'  src="/Nusu2.png" alt="" />
         </div>
         
           </div>
        </div>
    </div>
    </div>
  )
}

export default Hero