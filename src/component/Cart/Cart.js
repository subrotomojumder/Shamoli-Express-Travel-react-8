import React, { useEffect } from 'react';
import { useState } from 'react';
import Address from '../Address/Address';
import { getStorageData, setStorageData } from '../FakeDB/FakeDB';
import './Cart.css';

const Cart = ({selectedVehicle}) => {
    const [time, setTime] = useState()
   
    const totalPrice = selectedVehicle.reduce((previewSum, current) => previewSum + current.ticketPrice, 0);
    const handleBreakTime = (minute) => {
        setTime(minute)
        setStorageData(minute)        
    }
    
    return (
        <div className='p-4 bg-white relative'>
            <div className='sticky top-2'>
                <Address></Address>
                <div className='mt-4'>
                    <h2 className='text-lg font-semibold'>Add a Station Break</h2>
                    <div className='grid grid-cols-4 shadow-lg py-[4px] bg-zinc-200 rounded-lg my-2 md:pl-2'>
                        <div onClick={()=>handleBreakTime(10)} className='btn btn-warning font-medium rounded-full bg-white w-[46px]'>
                            <p>10<span className='text-sm lowercase'>m</span></p>
                        </div>
                        <div onClick={()=>handleBreakTime(15)} className='btn btn-warning font-medium rounded-full bg-white w-[46px]'>
                            <p>15<span className='text-sm lowercase'>m</span></p>
                        </div>
                        <div onClick={()=>handleBreakTime(20)} className='btn btn-warning font-medium rounded-full bg-white w-[46px]'>
                            <p>20<span className='text-sm lowercase'>m</span></p>
                        </div>
                        <div onClick={()=>handleBreakTime(30)} className='btn btn-warning font-medium rounded-full bg-white w-[46px]'>
                            <p>30<span className='text-sm lowercase'>m</span></p>
                        </div>
                    </div>
                </div>
                <div className='border rounded-lg mt-4 p-1'>
                    <h3 className='text-orange-400 font-semibold'>Break & Expense Details</h3>
                    <h5 className='bg-zinc-200 p-2 font-bold rounded-md mt-2'>Total Expense: {totalPrice}.0<span className='text-xs'>Tk</span></h5>
                    <h5 className='bg-zinc-200 p-2 font-bold rounded-md mt-2'>Break Time: {time}<span className='text-xs'>minute</span></h5>
                </div>
            </div>
        </div>
    );
};

export default Cart;