import React from 'react';

const Gallery = () => {
    return (
        <div className='mt-24 mb-24 text-center'>
            <h5 className='text-2xl font-bold'>Photo Gallery</h5>
            <h2 className='text-4xl font-bold'>kids with Robort toy</h2>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-7 max-w-[1200px] mx-auto' >
                <div>
                    <img src="https://rb.gy/2qsfy" alt="" />
                </div>
                <div>
                    <img src="https://rb.gy/t60xr" alt="" />
                </div>
                <div>
                    <img src="https://rb.gy/5o2z7" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;