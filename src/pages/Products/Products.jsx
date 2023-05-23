import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Products = () => {
   return (
      <div className='container m-auto'>
         <div className='mt=14 mb-14'>
            <h1 className='text-4xl text-center'>Frequently Asked Questions</h1>
            <p className='text-center mt-2'>Find your answer</p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
               <div className='bg-sky-100 p-5 rounded-lg shadow-lg' data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                  <div></div>
                  <img className='h-20 m-auto' src="https://i.ibb.co/zGkdbBT/best.png" alt="" />
                  <h3 className='my-3 text-xl font-bold'>Best Service</h3>
               </div>
               <div className='bg-sky-100 p-5 rounded-lg shadow-lg' >
                  {/* <div></div> */}
                  <img className='h-20 m-auto' src="https://i.ibb.co/QMcGs4c/value.png" alt="" />
                  <h3 className='my-3 text-xl font-bold'>Best Money Product</h3>
               </div>
               <div className='bg-sky-100 p-5 rounded-lg shadow-lg'>
                  <div></div>
                  <img className='h-20 m-auto' src="https://i.ibb.co/P1gjQSy/material.png" alt="" />
                  <h3 className='my-3 text-xl font-bold'>High Quality</h3>
               </div>
               <div className='bg-sky-100 p-5 rounded-lg shadow-lg'>
                  <div></div>
                  <img className='h-20 m-auto' src="https://i.ibb.co/JRBzFvQ/support.png" alt="" />
                  <h3 className='my-3 text-xl font-bold'>24/7 Best Support</h3>
               </div>
            </div>
         </div>

      </div>
   );
};

export default Products;