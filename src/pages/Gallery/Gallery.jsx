import React from 'react';

const Gallery = () => {
    return (
        <div className='mt-24 mb-24 text-center'>
            <h5 className='text-2xl font-bold'>Photo Gallery</h5>
            <h2 className='text-4xl font-bold'>kids with Robort toy</h2>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-7 max-w-[1200px] mx-auto' >
                <div>
                    <img className='rounded-md' src="https://rb.gy/2qsfy" alt="" />
                </div>
                <div>
                    <img className='rounded-md' src="https://rb.gy/t60xr" alt="" />
                </div>
                <div className='imgBox'>
                    <img className='rounded-md' src="https://rb.gy/xtlu2" alt="" />
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
            </div>
        </div>
    );
};

export default Gallery;