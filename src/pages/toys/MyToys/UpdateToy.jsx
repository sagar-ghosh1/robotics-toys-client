import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Swal from 'sweetalert2';

const UpdateToy = () => {
   useTitle('Update')
   const toy = useLoaderData();
   const { _id, toyName, photo, price, quantity, details } = toy;

   const handleUpdateToy = (event) => {
      event.preventDefault();
      const form = event.target;
      const toyName = form.toyName.value;
      const photo = form.photo.value;
      const price = form.price.value;
      const quantity = form.quantity.value;
      const details = form.details.value;

      const updateToy = { toyName, photo, price, quantity, details }
      console.log(updateToy);

      // send toy data to the server
      fetch(`http://localhost:5000/toy/${_id}`, {
         method: 'PUT',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify(updateToy)
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
               Swal.fire({
                  title: 'success',
                  text: 'Toy Updated successfully',
                  icon: 'success',
                  confirmButtonText: 'OK'
               })
            }
         })
   }

   return (
      <div className='bg-sky-50'>
         <h2 className='text-4xl text-center text-stone-700 font-semibold my-5'>Update Your Toy</h2>
         <div className='max-w-4xl mx-auto px-8'>
            <form onSubmit={handleUpdateToy}>

               <div className="md:flex justify-center gap-5 mb-2">
                  <div className="form-control md:w-1/2">
                     <label className="label">
                        <span className="label-text text-[16px] font-semibold">Toy Name</span>
                     </label>
                     <input type="text" name="toyName" defaultValue={toy.toyName} placeholder="Toy Name" required className="input input-bordered w-full" />
                  </div>

                  <div className="form-control md:w-1/2">
                     <label className="label">
                        <span className="label-text text-[16px] font-semibold">Photo URL</span>
                     </label>
                     <input type="text" name="photo" defaultValue={toy.photo} placeholder="https://exmple.png" required className="input input-bordered w-full" />
                  </div>
               </div>

               <div className="md:flex justify-center gap-5 mb-2">
                  <div className="form-control md:w-1/2">
                     <label className="label">
                        <span className="label-text text-[16px] font-semibold">Price</span>
                     </label>
                     <input type="number" name="price" defaultValue={toy.price} placeholder="$0.00" required className="input input-bordered w-full" />
                  </div>

                  <div className="form-control md:w-1/2">
                     <label className="label">
                        <span className="label-text text-[16px] font-semibold">Quantity</span>
                     </label>
                     <input type="text" name="quantity" defaultValue={toy.quantity} placeholder="Available Quantity" required className="input input-bordered w-full" />
                  </div>
               </div>

               <div className="form-control">
                  <label className="label">
                     <span className="label-text text-[16px] font-semibold">Detail description</span>
                  </label>
                  <textarea name='details' className="textarea textarea-bordered text-[16px] h-28" defaultValue={toy.details} placeholder="Toy Detail description" required></textarea>
               </div>

               <input type="submit" value="Update a Toy" className="btn btn-block bg-gradient-to-r from-orange-400 to-green-500 hover:from-green-500 hover:to-orange-500 rounded-md border-none mt-6 text-[16px] capitalize mb-10" />
            </form>
         </div>
      </div>
   );
};

export default UpdateToy;