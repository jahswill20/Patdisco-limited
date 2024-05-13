import React from 'react';
import Nav from '../components/Nav';
import hero from '../assets/Images/hero.jpg';

const Hero = () => {
  return (
    <div className='font-serif bg-yellow-300 w-full h-screen flex flex-col'>
      <Nav />
      <div className=' py-3 mt-3 md:flex md:h-full md:items-center '>
        <div className='mt-4 px-4 py-4 text-center mx-auto md:w-[400px] md:text-left md:relative md:bottom-24 md:pl-44'>
          <h2 className='text-4xl md:text-8xl md:relative md:-ml-60 '>PATDISCO Limited</h2>
          <p className='mt-4 md:text-3xl md:-ml-60'>A social Development Company</p>
        </div>
        <div className='flex justify-center md:w-1/2'>
          <img src={hero} alt="hero-img" className='w-60 h-64 rounded-full mx-auto shadow-xl md:h-[550px] md:w-[700px]
          md:rounded-none md:relative md:-top-6  md:rounded-b-full  md:mr-0 md:shadow-none' />
        </div>

      </div>
          <div className='flex justify-center md:justify-start md:absolute md:bottom-24 md:left-16'>
            <button className='px-4 py-2 rounded-full mt-8 mb-4 bg-blue-500 text-white md:w-80'>Stream the latest episode here</button>
          </div>
    </div>
  );
}

export default Hero;
