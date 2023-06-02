import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../../providers/AuthProvider';

const AddAToy = () => {
   const { users } = useContext(AuthContext);
   useTitle('Add a toy')

   const handleAddToy = (event) => {
      event.preventDefault();
      const form = event.target;
      const sellerName = form.sellerName.value;
      const sellerEmail = form.sellerEmail.value;
      const toyName = form.toyName.value;
      const photo = form.photo.value;
      const category = form.category.value;
      const rating = form.rating.value;
      const quantity = form.quantity.value;
      const details = form.details.value;
      const toyValue = form.price.value;
      const price = parseInt(toyValue);

      const newToy = { sellerName, sellerEmail, toyName, photo, category, rating, price, quantity, details }
      console.log(newToy);

      // send toy data to the server
      fetch('https://robotics-toys-server-sagar-ghosh1.vercel.app/toy', {
         method: 'POST',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify(newToy)
      })
         .then((res) => res.json())
         .then((data) => {
            // console.log(data);
            if (data.insertedId) {
               Swal.fire({
                  title: 'Good Job',
                  text: 'Toy added successfully',
                  icon: 'success',
                  confirmButtonText: 'OK'
               })
            }
         })
   }

   return (
      <div className='bg-sky-50'>
         <h2 className='text-4xl text-center text-stone-700 font-semibold my-5'>Add A Toy</h2>
         <div className='max-w-4xl mx-auto px-8 mb-10'>
            <form onSubmit={handleAddToy}>

               <div className="md:flex justify-center gap-5 mb-2">
                  <div className="form-control md:w-1/2">
                     <label className="label">
                        <span className="label-text text-[16px] font-semibold">Seller Name</span>
                     </label>
                     <input type="text" name="sellerName" defaultValue={users?.displayName} placeholder="Seller name" required className="input input-bordered w-full" />
                  </div>

                  <div className="form-control md:w-1/2">
                     <label className="label">
                        <span className="label-text text-[16px] font-semibold">Seller Email</span>
                     </label>
                     <input type="text" name="sellerEmail" defaultValue={users?.email} placeholder="Seller Email" required className="input input-bordered w-full" />
                  </div>
               </div>

               <div className="md:flex justify-center gap-5 mb-2">
                  <div className="form-control md:w-1/2">
                     <label className="label">
                        <span className="label-text text-[16px] font-semibold">Toy Name</span>
                     </label>
                     <input type="text" name="toyName" placeholder="Toy Name" required className="input input-bordered w-full" />
                  </div>

                  <div className="form-control md:w-1/2">
                     <label className="label">
                        <span className="label-text text-[16px] font-semibold">Photo URL</span>
                     </label>
                     <input type="text" name="photo" placeholder="https://exmple.png" required className="input input-bordered w-full" />
                  </div>
               </div>

               <div className="md:flex justify-center gap-5 mb-2">
                  <div className="form-control md:w-1/2">
                     <label className="label">
                        <span className="label-text text-[16px] font-semibold">Sub-category</span>
                     </label>
                     <input type="text" name="category" placeholder="Enter sub-category" required className="input input-bordered w-full" />
                  </div>

                  <div className="form-control md:w-1/2">
                     <label className="label">
                        <span className="label-text text-[16px] font-semibold">Rating</span>
                     </label>
                     <input type="text" name="rating" placeholder="Rating" required className="input input-bordered w-full" />
                  </div>
               </div>

               <div className="md:flex justify-center gap-5 mb-2">
                  <div className="form-control md:w-1/2">
                     <label className="label">
                        <span className="label-text text-[16px] font-semibold">Price</span>
                     </label>
                     <input type="number" name="price" placeholder="$0.00" required className="input input-bordered w-full" />
                  </div>

                  <div className="form-control md:w-1/2">
                     <label className="label">
                        <span className="label-text text-[16px] font-semibold">Quantity</span>
                     </label>
                     <input type="text" name="quantity" placeholder="Available Quantity" required className="input input-bordered w-full" />
                  </div>
               </div>

               <div className="form-control">
                  <label className="label">
                     <span className="label-text text-[16px] font-semibold">Detail description</span>
                  </label>
                  <textarea name='details' className="textarea textarea-bordered text-[16px] h-28" placeholder="Toy Detail description" required></textarea>
               </div>

               <input type="submit" value="Add a Toy" className="btn btn-block bg-gradient-to-r from-orange-400 to-green-500 hover:from-green-500 hover:to-orange-500 rounded-md border-none mt-6" />
            </form>
         </div>
      </div>
   );
};

export default AddAToy;