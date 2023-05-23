import React from 'react';

const NotFound = () => {
   return (
      <div className="hero min-h-screen bg-base-200">
         <div className="hero-content text-center">
            <div>
               <div className='mb-8'>
                  <img className='w-[700px]' src="https://rb.gy/su91u" alt="" />
               </div>
               <h1 className="text-5xl font-bold">Oops! <br />Page not found</h1>
               <p className="py-6">The page you are looking for could not be found.</p>
               
            </div>
         </div>
      </div>
   );
};

export default NotFound;