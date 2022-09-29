import React from 'react';
import './Main.css';
import Cart from '../Cart/Cart';
import Vehicle from '../Vehicle/Vehicle';
import { useState } from 'react';
import { useEffect } from 'react';
import Heder from '../Header/Heder';



const Main = () => {
    const [vehicles, setVehicle] = useState([]);
    const [carts, setCarts] = useState([]);
    
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setVehicle(data))
    }, [])

    const handleBuyPrice = vehicle => {
        setCarts([...carts, vehicle])
    }
    return (
        <div className='main-container bg-stone-100'>
            <div className='mx-1 md:mx-[8%] '>
                <Heder></Heder>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-5'>
                    {
                        vehicles.map(vehicle => <Vehicle vehicle={vehicle} handleBuyPrice={handleBuyPrice} key={vehicle.id}></Vehicle>)
                    }
                </div>
            </div>
            <Cart selectedVehicle={carts}></Cart>
        </div>
    );
};

export default Main;