import React from 'react';

const Banner = () => {
  return (
    <div>



      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://rb.gy/dqrkb")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://rb.gy/k7ktj" className="rounded-lg shadow-2xl" />
          <div className='text-white'>
            <h1 className="text-5xl font-bold">Best Toys Robot of all Kids!</h1>
            <p className="py-6 font-medium">Cozmo has a charming and playful personality. It expresses a wide range of emotions through its expressive eyes and animated movements. Kids can develop an emotional connection with Cozmo as it reacts to their interactions.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Banner;