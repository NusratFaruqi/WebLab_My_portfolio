'use client'
import React from 'react';
import { useRef } from 'react';
import emailjs from "@emailjs/browser";
import {FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
	const form = useRef();

	const sendEmail = (e) => {
	  e.preventDefault();
  
	  // Get form elements
	  const name = form.current.querySelector('#name').value;
	  const email = form.current.querySelector('#email').value;
	  const message = form.current.querySelector('#message').value;
  
	  // Validate inputs
	  if (name.length < 8) {
		alert('Full name must be at least 8 characters long.');
		return;
	  }
  
	  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	  if (!emailRegex.test(email)) {
		alert('Please enter a valid email address.');
		return;
	  }
  
	  if (message.length < 20) {
		alert('Message must be at least 20 characters long.');
		return;
	  }
  
	  // Assuming you have emailjs initialized and ready to use
	  emailjs.sendForm('service_3woxfyx', 'template_vljmhag', form.current, 'pK_wNr5fhvxQWF6XY')
		.then((result) => {
		  console.log(result.text);
		  // Show confirmation toast
		  toast.success('Message sent successfully!', { autoClose: 5000 });
		}, (error) => {
		  console.log(error.text);
		});
  
	  // Reset form
	  form.current.reset();
	}

  return (
    <div id='Contact' className='md:pt-24'>
      <div className="grid text-white max-w-screen-xl pt-8 sm:pt-0 grid-cols-1 gap-8 px-8 py-16 mx-auto rounded -lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading lg:text-5xl text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Let's talk!</h2>
            <div>
              <div className="space-y-3">
                <div className="flex justify-start space-x-3 ">
                  <a rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100011591340939&mibextid=ZbWKwL"  target='_blank' title="Facebook" className="flex items-center p-1 ">
                    <FaFacebook className='hover:text-purple-300' size={24} />
                  </a>
                  <a rel="noopener noreferrer" href="https://bd.linkedin.com/in/nusrat-faruqi-b3b799204" title="Linkedin" target='_blank' className="flex items-center p-1">
                    <FaLinkedin className='hover:text-purple-300' size={24}/>
                  </a>
                  <a rel="noopener noreferrer" href="https://github.com/NusratFaruqi" target='_blank' title="Twitter" className="flex items-center p-1">
                    <FaGithub className='hover:text-purple-300' size={24}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img src="/cont.png" alt="" className="p-6" />
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          noValidate=""
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="text-sm">Full name</label>
            <input id="name" type="text" placeholder="" name="user_name" className="w-full p-3 rounded text-gray-900 " />
          </div>
          <div>
            <label htmlFor="email" type="email" name="user_email" className="text-sm">Email</label>
            <input id="email" type="email" name="user_email"  className="w-full p-3 rounded text-gray-900 " />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">Message</label>
            <textarea id="message"  name="message" rows="3" className="w-full p-3 rounded text-gray-900 "></textarea>
          </div>
          <button type="submit" value="Send" className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:opacity-80 duration-100">Send Message</button>
        </form>
      </div>
      <div className="grid justify-center pt-6 lg:justify-between bg-[#181818]">
        <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6 md:mx-10 md:pb-5">
          <a href="#">
          <h1 className='text-2xl md:text-xl font-bold text-transparent  bg-clip-text bg-gradient-to-r  from-purple-300 to-purple-600'>Nusrat Faruqi</h1>	
          </a>
         
        </div>
        <div className="flex text-white justify-center pt-4 pb-2 space-x-4 lg:pt-0 lg:col-end-13 md:mx-10 md:pb-5">
          <span>©2023 All rights reserved</span>
        </div>
      </div>
    </div>
  )
}

export default Contact;
