'use client'
import React, {useState, useEffect} from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {HiMenu} from 'react-icons/hi'


function NavBer() {
    const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  
  const handleNav = () => {
    setNav(!nav);
  }
  
  useEffect(() => {
   const changeColor = () =>{
    if(window.scrollY >=90){
      setColor('#121212')
      setTextColor('#000000')
    }else{
      setColor('transparent')
      setTextColor('#000000')
    }
   };
   window.addEventListener('scroll', changeColor)
  }, []);
 

  return (
    <div style={{backgroundColor: `${color}`}} className=' fixed left-0 top-0 w-full z-10 ease-in duration-300 '>
    <div className=' flex justify-between items-center p-4 text-white'>
      <a href="#">
      <h1 className='text-2xl md:text-3xl  font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-300 to-purple-600'>Nusrat Faruqi</h1>
      </a>
    
      <ul className='hidden sm:flex md:text-xl font-semibold gap-3 '>
        <li className='p-4 hover:text-purple-400 duration-300' ><a href="#Home">Home</a></li>
        <li className='p-4 hover:text-purple-400 duration-300' ><a href="#About">About</a> </li>
        <li className='p-4 hover:text-purple-400 duration-300'><a href="#Project">Project</a></li>
        <li className='p-4 hover:text-purple-400 duration-300'><a href="#Contact">Contact</a></li>
      </ul>
      {/* Mobile Button */}
      <div onClick={handleNav} className='block sm:hidden z-10'>
        {nav ? <AiOutlineCloseCircle  className='text-black hover:text-white cursor-pointer' size={26} /> : <HiMenu size={26} className='text-white cursor-pointer'  />}
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden text-gray-900 absolute w-2/5 h-screen px-4 py-2 text-xl font-bold  bg-gradient-to-r from-purple-300 to-purple-600 top-0 duration-500
      ${nav? 'right-0' : 'right-[-100%]'} pt-16 `}>
        <ul>
        <li className='p-4 hover:text-white duration-500 ' ><a href="#Home">Home</a></li>
        <li className='p-4 hover:text-white duration-500' ><a href="#About">About</a> </li>
        <li className='p-4 hover:text-white duration-500'><a href="#Project">Project</a></li>
        <li className='p-4 hover:text-white duration-500'><a href="#Contact">Contact</a></li>
        </ul>
      </div>
    </div>

  </div>
  )
}

export default NavBer