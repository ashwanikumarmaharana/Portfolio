import React from 'react';
import Image from 'next/image'; // Import the Image component
import phone from '../assets/phone.png'; // Import the phone image (assuming it's located here)
import email from '../assets/mail.png';

const Contact = () => {
  return (
    <div className='w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row lg:space-x-8 text-white/70 p-4 sm:p-5 space-y-8 lg:space-y-0' id="contact">
      
      {/* Left Side (Contact Information) */}
      <div className='flex justify-start items-center w-full lg:w-1/2'>
        <ul className='space-y-4'>
          <li className='flex items-center'>
            <Image src={phone} alt="phone" className="mr-4 lg:mr-6" width={40} height={40} /> {/* Added width and height */}
            <p className='text-2xl lg:text-4xl'>+91 9650448301</p> 
          </li>
          <li className='flex items-center'>
            <Image src={email} alt="email" className="mr-2 lg:mr-4" width={40} height={40} /> {/* Added width and height */}
            <p className='text-lg lg:text-xl font-semibold'>ashwnaimaharana2021@gmail.com</p> 
          </li>
          <li>
          <p className="text-xl mt-4  mx-auto text-white/50">
            Unlock the full potential of your business with innovative web solutions designed to drive growth and success. Let’s take your online presence to the next level!
            </p>
          </li>

        </ul>
        
      </div>

      {/* Right Side (Form) */}
      <div className='bg-white/10 p-4 sm:p-6 rounded-xl w-full lg:w-1/2'>
        <h2 className='text-4xl sm:text-5xl font-bold text-orange-400 mb-4'>Let's Connect</h2>
        <p className='text-white/70 mb-6'>Send me a message and let's schedule a call!</p>
        <form className='space-y-4' action="https://api.web3forms.com/submit" method="POST">
  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
    <input type="hidden" name="access_key" value="37da0349-165b-4969-b3c1-9b018e1d6672"/>
    <input 
      type='text' 
      required 
      name='firstName' 
      className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-white' 
      placeholder='First Name' 
    />
    <input 
      type='text' 
      required 
      name='lastName' 
      className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-white' 
      placeholder='Last Name' 
    />
    <input 
      type='email' 
      required 
      name='email' 
      className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-white' 
      placeholder='Email' 
    />
    <input 
      type='tel' 
      name='phone' 
      className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-white' 
      placeholder='Phone' 
    />
  </div>
  <textarea 
    name='message' 
    required 
    className='w-full bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-white' 
    placeholder='Describe your project needs here' 
  />
  <button 
    type="submit" 
    className='bg-orange-700 hover:bg-orange-600 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl'
  >
    Send Message
  </button>
</form>


      </div>
    </div>
  );
};

export default Contact;
