import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { Link } from 'react-router-dom';

const ShopCard = ({ toy }) => {
   console.log(toy);
   const { _id, sellerName, toyName, photo, rating, price, quantity } = toy;

   return (
      <div>
         <div className="card w-96 bg-base-100 shadow-xl mt-5 mb-10">
            <figure><img src={photo} alt="toy" /></figure>
            <div className="card-body">
               <h2 className="card-title">
                  {toyName}
               </h2>
               <p className='text-left'><span className='font-semibold'>Price:</span> ${price}</p>
               <div className="card-actions justify-between">
                  <div className='flex gap-2'><Rating style={{ maxWidth: 120 }} value={rating} readOnly /> ({rating})</div>
                  <Link to={`/category-detail/${_id}`} className="btn btn-sm btn-outline">View Details</Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ShopCard;