import React from 'react';
import logo from '../images/logo.jpg';

const Heder = () => {
    return (
        <div className=' mb-6 mt-10'>
            <div className='md:flex items-center'>
                <img className='w-16  mr-2' src={logo} alt="" />
                <h1 className='text-3xl font-semibold'><span className='text-blue-600'>Shamoli</span>-Express-Travel</h1>
            </div>
            <h3 className='text-lg font-medium mt-2'>Travel To Your Favorite Place......</h3>
        </div>
    );
};

export default Heder;