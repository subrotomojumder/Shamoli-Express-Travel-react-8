import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Address = () => {
    return (
        <div>
            <div className='text-center'>
                <img className='rounded-xl border-2 h-16 mx-auto' src="https://www.mantotman.nl/files/styles/tile_small/public/2022-07/66196689_s.jpg?h=b44d6655&itok=26vViPPW" alt="" />
                <h3 className='font-bold'>Akbor Hossain</h3>
                <div className='flex items-center justify-center'>
                    <FontAwesomeIcon icon={faLocationDot} className='text-yellow-300'></FontAwesomeIcon>
                    <p className='ml-1 text-sky-600'>Laxmipur, Bangladesh</p>
                </div>
            </div>
            <div className='shadow-xl py-2 bg-zinc-100 rounded-lg pl-4 text-sm'> 
                <p>Education: BSC / Age: 30</p>
                <p>Job: Business </p>
                <p>Email: akborhossain12@gmail.com</p>
            </div>
        </div>
    );
};

export default Address;