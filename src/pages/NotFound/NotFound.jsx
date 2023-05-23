import React from 'react';

const NotFound = () => {
   return (
      <div className="hero min-h-screen bg-base-200">
         <div className="hero-content text-center">
            <div>
               <div className='mb-8'>
                  <img className='w-[700px]' src="https://rb.gy/su91u" alt="" />
               </div>
               <h1 className="text-5xl font-bold"> <span className='text-slate-500 hover:text-blue-600'>Oops!!!</span> <br />Page not found</h1>
               <p className="py-6">The page you are looking for could not be found. plz back to home....</p>
               <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 border-none">Back to Home</button>
            </div>
         </div>
      </div>
   );
};

export default NotFound;