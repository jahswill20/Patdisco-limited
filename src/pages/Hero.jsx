// Hero.js
import React from 'react';
import Nav from '../components/Nav';
import hero from '../assets/Images/hero.jpg';

const Hero = () => {
  return (
    <div className='font-serif bg-yellow-300 w-full h-full mx-auto' id='Hero'>
      <Nav />
      <div className='shadow-xl py-3 mt-3'>
        <div className='mt-4 px-4 py-4 text-center '>
          <h2 className='text-3xl'>PATDISCO Limited</h2>
          <p className='mt-4'>A social Development Company</p>
        </div>
        <div className='flex'>
          <img src={hero} alt="hero-img" className='w-60 h-64 rounded-full mx-auto shadow-xl' />
        </div>
        <div className='flex justify-center md:justify-start'>
          <button className='px-4 py-2 rounded-full mt-8 mb-4 bg-blue-500 text-white'>Stream the latest episode here</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
