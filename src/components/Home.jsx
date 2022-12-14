import React from 'react'
import { Link } from 'react-scroll';

import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
      <div className='max-w-[1000px] px-[38px] flex flex-col justify-center h-full'>
        <p className='text-white'>Hi, my name is</p>
        <h1 className='text-2xl sm:text-7xl font-bold text-white'>
          Abhijeet Kumar
        </h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-yellow-400'>
          Aspiring Software Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Currently, I’m focusing on building responsive full-stack web applications.
        </p>
        <div>
          <Link to='projects' smooth={true} duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
          View Projects
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
            </button>
            </Link> 
        </div>
      </div>
    </div>
  )
}

export default Home

