import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryDetails = () => {
   const ToyDetails = useLoaderData();
   const { photo, toyName, price, rating, details } = ToyDetails;

   return (
      <div>
         <div className="hero min-h-screen bg-sky-50">
            <div className="hero-content flex-col">
               <img src={photo} className="max-w-md rounded-lg shadow-2xl" />
               <div>
                  <h1 className="text-5xl font-bold">{toyName}</h1>
                  <p className="pt-6 pb-2"><span className='text-[17px] font-bold'>Price: </span>${price}</p>
                  <p className='flex gap-2 mb-2'>
                     <Rating style={{ maxWidth: 120 }} value={rating} readOnly className='' /> ({rating})
                  </p>
                  <p><span className='text-[17px] font-bold'>Details: </span>{details}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CategoryDetails;