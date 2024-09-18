"use client";
import React from 'react';
import Image from 'next/image';
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";

const About = () => {
  return (
    <div className='w-full max-w-[1200px] mx-auto bg-black pt-1 md:pt-20' id="about">
      <h1 className='text-white text-center text-4xl sm:text-5xl lg:text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4'>
        About <span className='text-orange-400'>Me</span>
      </h1>

      <div className='px-4 sm:px-6 md:px-8 lg:p-0 grid grid-cols-1 md:grid-cols-8 gap-6 place-items-center'>
        {/** Section 1 */}
        <div className='w-full py-6 md:py-0 md:h-[200px] md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden transition-transform transform hover:scale-102'>
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row items-center p-2 sm:p-6'>
            <Image src={book} alt='book' className='w-auto h-[100px] sm:h-[130px]' />
            <div className='flex flex-col ml-1'>
              <h2 className='text-xl sm:text-2xl font-bold text-white/80'>Education</h2>
              <p className='text-md sm:text-lg text-white/70 mt-2 md:line-clamp-3'>
                Masters of Computer Application<br />
                Bachelor of Computer Applications
              </p>
            </div>
          </div>
        </div>

        {/** Section 2 */}
        <div className='w-full py-6 md:py-0 md:h-[200px] md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden transition-transform transform hover:scale-102'>
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row items-center p-2 sm:p-6'>
            <Image src={pc} alt='pc' className='w-auto h-[100px] sm:h-[130px]' />
            <div className='flex flex-col ml-4'>
              <h2 className='text-xl sm:text-2xl font-bold text-white/80'>Problem-solving</h2>
              <p className='text-md sm:text-lg text-white/70 mt-2 md:line-clamp-3'>
                I am ready to broaden my skill set and embrace the challenges that lie ahead.
              </p>
            </div>
          </div>
        </div>

        {/** Section 3 */}
        <div className='w-ful py-6 md:py-0 md:h-[200px] md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden transition-transform transform hover:scale-102'>
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row items-center p-2 sm:p-6'>
            <Image src={card} alt='card' className='w-auto h-[100px] sm:h-[130px]' />
            <div className='flex flex-col ml-4'>
              <h2 className='text-xl sm:text-2xl font-bold text-white/80'>Experience</h2>
              <p className='text-md sm:text-lg text-white/70 mt-2 md:line-clamp-3'>
                I have a diverse portfolio of projects like CRM, responsive landing pages, custom sliders, progress bars, and many more.
              </p>
            </div>
          </div>
        </div>

        {/** Section 4 */}
        <div className='w-full py-6 md:py-0 md:h-[200px] md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden transition-transform transform hover:scale-102'>
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row items-center p-2 sm:p-6'>
            <Image src={finance} alt='finance' className='w-auto h-[100px] sm:h-[130px]' />
            <div className='flex flex-col ml-4'>
              <h2 className='text-xl sm:text-2xl font-bold text-white/80'>Technical Skills</h2>
              <p className='text-md sm:text-lg text-white/70 mt-2 md:line-clamp-3'>
                As a fullstack Web Developer, I specialize in MERN Stack, Next.js, PHP CodeIgniter, SQL, Tailwind CSS, Ngrok, and Framer Motion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
