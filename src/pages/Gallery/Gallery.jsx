import React from 'react';

const Gallery = () => {
    return (
        <div className='mt-24 mb-24 text-center'>
            <h5 className='text-2xl font-bold text-purple-500 mb-2'>Photo Gallery</h5>
            <h2 className='text-4xl font-bold mb-8'>kids with Robort toy</h2>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-7 max-w-[1200px] mx-auto' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <div>
                    <img className='rounded-md' src="https://rb.gy/2qsfy" alt="" />
                </div>
                <div>
                    <img className='rounded-md' src="https://rb.gy/t60xr" alt="" />
                </div>
                <div className='imgBox'>
                    <img className='rounded-md' src="https://rb.gy/s2zi9" alt="" />
                </div>
                <div className='imgBox'>
                    <img className='rounded-md' src="https://rb.gy/z4mq8" alt="" />
                </div>
                <div className='imgBox'>
                    <img className='rounded-md' src="https://rb.gy/14cci" alt="" />
                </div>
                <div className='imgBox'>
                    <img className='rounded-md' src="https://rb.gy/p578i" alt="" />
                </div>
                <div className='imgBox'>
                    <img className='rounded-md' src="https://rb.gy/83c0r" alt="" />
                </div>
                <div className='imgBox'>
                    <img className='rounded-md' src="https://rb.gy/t9hb6" alt="" />
                </div>
                <div className='imgBox'>
                    <img className='rounded-md' src="https://rb.gy/q9a87" alt="" />
                </div>
                <div className='imgBox'>
                    <img className='rounded-md' src="https://rb.gy/676uw" alt="" />
                </div>
                <div className='imgBox'>
                    <img className='rounded-md' src="https://rb.gy/lbh9z" alt="" />
                </div>
                <div className='imgBox'>
                    <img className='rounded-md' src="https://rb.gy/rnij4" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;