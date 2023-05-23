import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
   const { signIn, googleSign } = useContext(AuthContext);
   const navigates = useNavigate();
   const locations = useLocation();
   useTitle('Login');
   const [error, setError] = useState("");

   const cameFrom = locations.state?.from?.pathname || "/"

   const handleLogIn = (event) => {
      event.preventDefault();
      const form = event.target
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);

      signIn(email, password)
         .then((result) => {
            const user = result.user;
            console.log(user);
            event.target.reset();
            navigates(cameFrom, { replace: true })
         })
         .catch(error => {
            setError(error.message)
            setError(" Email Password does not match");
         })
   }

   return (
      <div>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-full">
               <div className="card flex-shrink-0 w-full max-w-md shadow-sm border rounded-md bg-base-100">
                  <h2 className='text-5xl text-stone-700 text-center font-bold mt-8 mb-5'>Login</h2>
                  <p className='text-center text-slate-500 font-semibold'>Welcome back! login with your credentials</p>
                  <div className="card-body">
                     <form onSubmit={handleLogIn}>
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text font-semibold">Email</span>
                           </label>
                           <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text font-semibold">Password</span>
                           </label>
                           <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                           <label className="label">
                              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                           </label>
                        </div>
                        <div className="form-control mt-6">
                           <input type="submit" value="Login" className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md border-none text-[16px] capitalize" />
                           
                           <button onClick={googleSign} className="btn btn-outline  btn-accent rounded-md text-[16px] capitalize mt-5"><FaGoogle className='mr-2' /> Sign in with Google</button>

                           <small className='text-center mt-2'>Don&lsquo;t have account? <Link to="/register" className='text-amber-600 font-semibold'>Register</Link></small>
                        </div>
                        <p className='text-red-600 font-semibold text-center mt-3'>{error}</p>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;