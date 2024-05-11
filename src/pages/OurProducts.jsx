import React from 'react';
import products1 from '../assets/Images/products1.jpg';
import products2 from '../assets/Images/products2.jpg';

const OurProducts = () => {
  return (
    <div className='bg-gray-200 h-full pb-9 mx-auto' id='OurProducts'>
     <div className='px-4 py-5  text-center text-2xl font-bold '>
        <h2>Our Products</h2>
    </div> 
    <div className='md:flex ' >
        <div>
            <div className='bg-white w-64 relative  mx-auto rounded-xl shadow-xl'> <img src={products1} alt="product 1" className='w-20  relative mx-auto' /></div>
            <div
               className='bg-white w-64 relative  mx-auto rounded-xl shadow-xl mt-3 px-3 py-3' 
            ><p>Centralised penalty charge Management platform, Providing flexible payment solitions and ease 
                of service</p></div>
        </div>
        <div>
            <div className='bg-white w-64 relative  mx-auto rounded-xl shadow-xl flex mt-3 justify-center gap-1'> <img src={products2} alt=" product 2" className='w-20' />
               <h2 className='font-bold mt-6'>For Appeal Directory</h2>
            </div>
            <div className='bg-white w-64 relative  mx-auto rounded-xl shadow-xl mt-3 px-3 py-3'> <p>
            Centralised Penalty charge Apppeal Directory to help
                customers challenge fine effectively, Providing Educational Material 
                and helpful information on parking Enforcement
                </p></div>
        </div>
    </div>
    </div>
  );
}

export default OurProducts;
