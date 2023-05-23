import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
   return (
      <div>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-full">
               <div className="card flex-shrink-0 w-full max-w-md shadow-sm border rounded-md bg-base-100">
                  <h2 className='text-5xl text-stone-700 text-center font-bold mt-8 mb-5'>Register</h2>
                  <p className='text-center text-slate-500 font-semibold'>Create an Account it&apos;s free</p>
                  <div className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text font-semibold">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text font-semibold">Photo</span>
                        </label>
                        <input type="text" placeholder="Photo URL" className="input input-bordered" />
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md border-none text-[16px] capitalize">Register</button>

                        <small className='text-center mt-2'>Already have an account? <Link to="/login" className='text-amber-600 font-semibold'>Login</Link></small>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;