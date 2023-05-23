import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
   return (
      <div>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-full">
               <div className="card flex-shrink-0 w-full max-w-md shadow-sm border rounded-md bg-base-100">
                  <h2 className='text-5xl text-stone-700 text-center font-bold mt-8 mb-5'>Login</h2>
                  <p className='text-center text-slate-500 font-semibold'>Welcome back! login with your credentials</p>
                  <div className="card-body">
                     <form>
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text font-semibold">Email</span>
                           </label>
                           <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text font-semibold">Password</span>
                           </label>
                           <input type="text" name='password' placeholder="password" className="input input-bordered" />
                           <label className="label">
                              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                           </label>
                        </div>
                        <div className="form-control mt-6">
                           <input type="submit" value="Login" className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md border-none text-[16px] capitalize" />
                           
                           <button className="btn btn-outline  btn-accent rounded-md text-[16px] capitalize mt-5"><FaGoogle className='mr-2' /> Sign in with Google</button>

                           <small className='text-center mt-2'>Don&lsquo;t have account? <Link to="/register" className='text-amber-600 font-semibold'>Register</Link></small>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;