'use client'
import React, { useState } from 'react';
import {IoIosCloudDone} from 'react-icons/io'
const Project = () => {
  const [activeTab, setActiveTab] = useState('Graphic Design');

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  return (
	<div id='Project'>
	
    <div  className="container mx-auto px-4 md:pb-10 md:pt-32">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 duration-100 mb-10 text-center">
        My Project
      </h1>
      <div className="flex mb-4 justify-center">
        <button
          onClick={() => handleTabClick('Graphic Design')}
          className={`mr-4 p-2 rounded font-semibold text-white ${activeTab === 'Graphic Design' ? 'bg-gradient-to-r from-purple-300 to-purple-600 hover:opacity-80 duration-100' : 'bg-gray-700'}`}
        >
          Graphic Design
        </button>
        <button
          onClick={() => handleTabClick('Software Development')}
		  className={`mr-4 p-2 rounded font-semibold text-white ${activeTab === 'Software Development' ? 'bg-gradient-to-r from-purple-300 to-purple-600 hover:opacity-80 duration-100' : 'bg-gray-700'}`}
        >
          Software Development
        </button>
        <button
          onClick={() => handleTabClick('Content Writing')}
          className={`mr-4 p-2 rounded font-semibold text-white ${activeTab === 'Content Writing' ? 'bg-gradient-to-r from-purple-300 to-purple-600 hover:opacity-80 duration-100' : 'bg-gray-700'}`}
        >
          Content Writing
        </button>
        <button
          onClick={() => handleTabClick('Research')}
		  className={`mr-4 p-2 rounded font-semibold text-white ${activeTab === 'Research' ? 'bg-gradient-to-r from-purple-300 to-purple-600 hover:opacity-80 duration-100' : 'bg-gray-700'}`}
        >
          Research
        </button>
      </div>

     	  {activeTab === 'Graphic Design' && (
  <section className="py-6 ">
    <div className="container flex flex-col justify-center p-4 mx-auto">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 relative">
        <div className="relative">
          <img className="object-cover w-full aspect-square" src="/figma.png" alt="Design 1" />
          <a
            href="https://www.figma.com/proto/qG4m5G1XZonG9aaTXPBUop/Untitled?node-id=87-5&starting-point-node-id=87%3A5&scaling=scale-down-width"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2font-semibold bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 duration-100 font-semibold py-2 px-4 rounded text-center"
          >
            Go to Figma
          </a>
        </div>
        <div className="relative">
          <img className="object-cover w-full aspect-square" src="/1 (1).jpg" alt="Design 2" />
        </div>
        <div className="relative">
          <img className="object-cover w-full  aspect-square" src="/1 (2).jpg" alt="Design 3" />
        </div>
        <div className="relative">
          <img className="object-cover w-full  aspect-square" src="/1 (3).jpg" alt="Design 4" />
        </div>
        <div className="relative">
          <img className="object-cover w-full  aspect-square" src="/1 (4).jpg" alt="Design 5" />
        </div>
        <div className="relative">
          <img className="object-cover w-full  aspect-square" src="/1 (5).jpg" alt="Design 6" />
        </div>
        <div className="relative">
          <img className="object-cover w-full  aspect-square" src="/1 (6).jpg" alt="Design 7" />
        </div>
        <div className="relative">
          <img className="object-cover w-full  aspect-square" src="/1 (7).jpg" alt="Design 8" />
        </div>
      </div>
    </div>
  </section>
)}


   {activeTab === 'Content Writing' && (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* Content Section 1 */}
    <div className="container text-white max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-[#18181818]">
      <div className="flex items-center justify-between">
        <span className="text-sm">May 1, 2021</span>
        <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded">Continue Reading</a>
      </div>
      <div className="mt-3">
        <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">COSRX Aloe Soothing Sun Cream: The Best Sun Protection</a>
        <p className="mt-2">When it comes to safeguarding our skin against the harmful effects of UV rays,
selecting the right sunscreen is of utmost importance...</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div>
          {/* No Live Demo link for Content Writing */}
        </div>
      </div>
    </div>

    {/* Content Section 2 */}
    <div className="container text-white max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-[#18181818]">
      <div className="flex items-center justify-between">
        <span className="text-sm">July 11, 2022</span>
        <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded">Continue Reading</a>
      </div>
      <div className="mt-3">
        <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">Low pH Good Morning Gel Cleanser Introduction</a>
        <p className="mt-2">The Low pH Good Morning Gel Cleanser is undoubtedly a vital step in achieving
healthy and radiant-looking skin when ....</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div>
          {/* No Live Demo link for Content Writing */}
        </div>
      </div>
    </div>

    {/* Content Section 3 */}
    <div className="container text-white max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-[#18181818]">
      <div className="flex items-center justify-between">
        <span className="text-sm">Sep 12, 2023</span>
        <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded">Continue Reading</a>
      </div>
      <div className="mt-3">
        <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">Cosrx BHA Blackhead Power Liquid: Get Clear, Radiant Skin with this
Amazing Product</a>
        <p className="mt-2">Are you tired of battling stubborn blackheads and longing for clear, radiant skin?
....</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div>
          {/* No Live Demo link for Content Writing */}
        </div>
      </div>
    </div>
  </div>
)}


{activeTab === 'Software Development' && (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {/* Project Card 1 */}
	<div className="max-w-xs relative flex flex-col justify-between p-6 space-y-8 mx-auto">
  <div className="relative rounded-t-md h-72 overflow-hidden">
    <img src="/web.png" alt="Project 5" className="object-cover object-center w-full h-full" />
   <p></p>
    <a
      href="https://interio-56kbyhnd6-nusratfaruqi.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-4 right-4 p-2 font-semibold bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 duration-100 rounded-md text-white mr-16"
    >
      Live Demo
    </a>
  </div>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione corrupti quas quia aperiam error placeat quod ducimus at eos molestias, eligendi, et officia quae culpa excepturi necessitatibus dolor quibusdam.</p>
 
</div>
    {/* Project Card 2 */}
    <div className="max-w-xs flex flex-col justify-between p-6 space-y-8 mx-auto">
      <img src="/mobile.png" alt="Project 6" className="object-cover object-center w-full rounded-t-md h-72" />
	  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vel iure corrupti vitae obcaecati perferendis aliquid? Quaerat voluptatibus magnam neque facilis porro nihil unde iure, tenetur id fuga animi consectetur!</p>
      
      
    </div>
  </div>
)}


     {activeTab === 'Research' && (
  <div className="flex items-center p-6 space-x-4 rounded-md justify-center text-white">
    <div className="flex items-center self-stretch justify-center">
     <IoIosCloudDone className='text-purple-300' size={32}/>
    </div>
    <span>I am right now doing three papers for journal on deep learning.</span>
  </div>
)}
    </div>
	</div>
  );
  
};

export default Project;
