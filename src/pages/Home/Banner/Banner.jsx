import React from 'react';

const Banner = () => {
  return (
    <div>

      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://rb.gy/dqrkb")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://rb.gy/k7ktj" className="rounded-lg shadow-2xl" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="2000" />
          <div className='text-white'>
            <h1 className="text-5xl font-bold">Best Toys Robot of all Kids!</h1>
            <p className="py-6 font-medium">Cozmo has a charming and playful personality. It expresses a wide range of emotions through its expressive eyes and animated movements. Kids can develop an emotional connection with Cozmo as it reacts to their interactions.</p>
            <button className="btn bg-gradient-to-r from-orange-400 to-green-500 hover:from-green-500 hover:to-orange-500 border-none" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="500">Back to Home</button>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Banner;