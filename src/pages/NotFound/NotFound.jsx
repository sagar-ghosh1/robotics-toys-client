import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
   return (
      <div className="hero min-h-screen bg-base-200">
         <div className="hero-content text-center">
            <div>
               <div className='mb-8'>
                  <img className='w-[700px] rounded' src="https://rb.gy/su91u" alt="" />
               </div>
               <h1 className="text-5xl font-bold"> <span className='text-slate-500 hover:text-blue-600'>Oops!!!</span> <br />Page not found</h1>
               <p className="py-6">The page you are looking for could not be found. plz back to home....</p>
               <Link to="/" className="btn btn-outline btn-primary"> <FaArrowLeft className='mr-2' /> Back to Home</Link>
            </div>
         </div>
      </div>
   );
};

export default NotFound;