import React from 'react';

const Services = () => {
   return (



      <div className=' mb-14'>
         <h1 className='text-center mt-14 text-4xl font-bold'>Our service</h1>
         <p className='text-center mt-4 font-bold mb-5'>All new upcoming Robort in the world</p>
         <div className='flex  justify-center gap-5'>
            <div className="card w-96 bg-base-100 shadow-xl " data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
               <figure><img src="https://rb.gy/j7iw9" alt="Shoes" /></figure>
               <div className="card-body">
                  <h2 className="card-title">RoboBuilder Kit</h2>
                  <p>The RoboBuilder Kit is an all-in-one robotics construction set that empowers aspiring roboticists and enthusiasts to bring their imagination to life. </p>
               </div>

            </div>
            <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
               <figure><img src="https://rb.gy/j7iw9" alt="Shoes" /></figure>
               <div className="card-body">
                  <h2 className="card-title">RoboGenius Kit</h2>
                  <p>The RoboGenius Kit is an exciting and comprehensive robotics kit designed to unleash your creativity and intellect.</p>
               </div>

            </div>
            <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
               <figure><img src="https://rb.gy/j7iw9" alt="Shoes" /></figure>
               <div className="card-body">
                  <h2 className="card-title">TechnoBotics Kit</h2>
                  <p>The TechnoBotics Kit is a dynamic and innovative robotics kit that merges technology and robotics to provide an immersive learning experience. </p>
               </div>

            </div>
         </div>
      </div>
   );
};

export default Services;