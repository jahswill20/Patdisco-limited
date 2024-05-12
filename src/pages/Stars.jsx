import React from 'react';
import player1 from '../assets/Images/player1.jpg';
import player2 from '../assets/Images/player2.jpg';
import player3 from '../assets/Images/player3.jpg';
import player4 from '../assets/Images/player4.jpg';


const Stars = () => {
  return (
    <div className=' px-10 md:px-11'>
      <h2 className='text-center text-xl font-bold
      mt-3 md:text-start md:text-5xl  md:w-72 md:mt-10'>
        The stars of Patdisco
      </h2>
      <div className='md:flex md:gap-24 md:justify-center'>
        <div className='md:flex md:gap-16 md:mt-32 md:mb-24'>
        <div className='flex flex-col mt-7'>
          <img src={player1} alt="player1" className='w-56 h-60 rounded-full mx-auto shadow-xl'/>
          <div className='flex flex-col bg-yellow-400 w-56 h-20 mx-auto
          text-center px-3 py-3 rounded-xl'>
            <h2 className='font-bold text-lg'>Tammy Gede</h2>
            <p>Entreprenuer</p>
          </div>
        </div>
        <div className='flex flex-col mt-7'>
          <img src={player2} alt="player2"  className='w-56 h-60 rounded-full mx-auto shadow-xl'/>
          <div className='flex flex-col bg-blue-300 w-56 h-20 mx-auto
          text-center px-3 py-3 rounded-xl'>
            <h2  className='font-bold text-lg'>John Odumosu</h2>
            <p>Marketing Manager</p>
          </div>
         </div>     
        </div>
    <div className='md:flex md:gap-16 md:mb-10'>
        <div className='flex flex-col mt-7'>
          <img src={player3} alt="player3" className='w-56 h-60 rounded-full mx-auto shadow-xl'/>
          <div className='flex flex-col bg-pink-400 w-56 h-20 mx-auto
          text-center px-3 py-3 rounded-xl'>
            <h2  className='font-bold text-lg'>Olalekan olajide</h2>
            <p>Social media specialist</p>
          </div>
        </div>
        <div className='flex flex-col mt-7'>
          <img src={player4} alt="player4" className='w-56 h-60 rounded-full mx-auto shadow-xl' />
          <div className='flex flex-col bg-yellow-300 w-56 h-20 mx-auto
          text-center px-3 py-3 rounded-xl'>
            <h2 className='font-bold text-lg'>Zidi Ebi</h2>
            <p>Restaurant owner</p>
          </div>
        </div>
      </div>

    </div>
    </div>
  );
}

export default Stars;
