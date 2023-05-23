import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import useTitle from '../../hooks/useTitle';

const Register = () => {
   const navigates = useNavigate();
   const { registerUser } = useContext(AuthContext);
   const [error, setError] = useState('');
   useTitle('Register')

   const handleRegister = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name, photo, email, password);

      if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
         setError('invalid password, least one letter and one number');
         return;
      }

      registerUser(email, password)
         .then(result => {
            // console.log(result.user);
            upgradeProfiles(result.user, name, photo)
            navigates("/login");
         })
         .catch(error => {
            setError(error.message);
         })
   }

   const upgradeProfiles = (info, name, photo) => {
      updateProfile(info, {
         displayName: name,
         photoURL: photo
      })
         .then(() => {
            console.log("Registers Successful")
         })
         .catch(error => {
            setError(error.message);
         })
   }

   return (
      <div>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-full">
               <div className="card flex-shrink-0 w-full max-w-md shadow-sm border rounded-md bg-base-100">
                  <h2 className='text-5xl text-stone-700 text-center font-bold mt-8 mb-5'>Register</h2>
                  <p className='text-center text-slate-500 font-semibold'>Create an Account it&apos;s free</p>
                  <div className="card-body">
                     <form onSubmit={handleRegister}>
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text font-semibold">Name</span>
                           </label>
                           <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text font-semibold">Email</span>
                           </label>
                           <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text font-semibold">Password</span>
                           </label>
                           <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text font-semibold">Photo</span>
                           </label>
                           <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                           <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md border-none text-[16px] capitalize">Register</button>

                           <small className='text-center mt-2'>Already have an account? <Link to="/login" className='text-amber-600 font-semibold'>Login</Link></small>
                        </div>
                        <label className="label text-red-600">
                           <small className='text-[16px] mx-auto'>{error}</small>
                        </label>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;