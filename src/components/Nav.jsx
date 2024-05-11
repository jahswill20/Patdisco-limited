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
      <div className='hidden md:flex'>
        <a href="#">Home</a>
        <a href="#">Our Products</a>
        <a href="#">About Us</a>
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
        <div className='absolute h-18 top-14 w-60 left-3 rounded-lg py-2 px-3 flex flex-col justify-center bg-blue-300 gap-2 md:hidden'>
          <a href="#Home">Home</a>
          <a href="#OurProducts">Our Products</a>
          <a href="#About">About Us</a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
