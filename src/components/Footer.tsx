import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si'; // Import Gmail icon

const Footer = () => {
  return (
    <div className='px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1200px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center'>
      <h1 className='mt-4 !text-xl font-bold'>Ashwani Kumar Maharana</h1>
      <div className='flex space-x-6 mt-4'>
        <a
          href='https://www.linkedin.com/authwall?trkInfo=AQH8ywe_sxFgugAAAZH6fPGQY3VdAfdGzfyfUpZPv-qfpXAXyiS6ZwFaF-K4SsHoNjVrdRqP7rZe93BA8Vw1k9MDvviuW9FTjA8BAkd90zbpjJ7tSB-cvMbukxXIPGM0eroRhMs=&original_referer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fin.linkedin.com%2Fin%2Fashwani-kumar-maharana-25617820a'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:text-blue-300'
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href='mailto:ashwanimaharana2021@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-red-500 hover:text-red-300'
        >
          <SiGmail size={24} />
        </a>
        <a
          href='https://www.instagram.com/your-instagram-handle'
          target='_blank'
          rel='noopener noreferrer'
          className='text-pink-500 hover:text-pink-300'
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
