import React from 'react';

const Services = () => {
   return (



      <div className=' mb-14'>
         <h1 className='text-center mt-14 text-4xl font-bold'>Our service</h1>
         <div className='flex  justify-center gap-5'>
           
            <div className="card w-96 bg-base-100 shadow-xl">
               <figure><img src="https://rb.gy/j7iw9" alt="Shoes" /></figure>
               <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
               </div>

            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
               <figure><img src="https://rb.gy/j7iw9" alt="Shoes" /></figure>
               <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
               </div>

            </div>
         </div>
      </div>
   );
};

export default Services;