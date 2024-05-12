import React, { useState } from 'react';
import iconsmenu from '../assets/icons/iconsmenu.png';
import logo from '../assets/Images/logo.jpg';
import cancel from '../assets/icons/cancel.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex justify-between bg-blue-300 px-7 py-3 h-16 rounded-b-3xl'>
      <div className='hidden md:flex justify-between gap-80'>
        <div className='md:flex gap-9 mt-2 px-7 font-bold ml-8' >
        <a href="#Home">HOME</a>
        <a href="#OurProducts">OUR PRODUCTS</a>
        <a href="#About">ABOUT US</a>
        </div>
        <img src={logo} alt="" className='-rotate-90 w-80 h-60 absolute right-5 -top-0 -mt-20'  />
      </div>
      <div>
        {isMenuOpen ? (
          <img
            src={cancel}
            alt="cancel"
            className='w-7 cursor-pointer md:hidden'
            onClick={toggleMenu}
          />
        ) : (
          <img
            src={iconsmenu}
            alt="menu"
            className='w-7 cursor-pointer md:hidden'
            onClick={toggleMenu}
          />
        )}
      </div>
      <div>
        <img src={logo} alt="logo" className='-rotate-90 w-24 relative bottom-16 h-44 md:hidden' />
      </div>
      {isMenuOpen && (
        <div className='absolute h-18 top-14  left-3 rounded-lg py-2 px-5 flex flex-col justify-center bg-blue-300 gap-2 md:hidden'>
          <a href="#Home">Home</a>
          <a href="#OurProducts">Our Products</a>
          <a href="#About">About Us</a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
