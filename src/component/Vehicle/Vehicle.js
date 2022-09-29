import React from 'react';

const Vehicle = ({ vehicle, handleBuyPrice }) => {
    const {id, placeAim, ticketPrice, img, vehicleType} = vehicle;
    return (
        <div className=''>
            <div className="card card-compact w-full bg-base-100 shadow-xl rounded-md ">
                <figure><img src={img} className="h-52" alt="bus" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{placeAim}</h2>
                    <div className="badge badge-outline bg-amber-200">{vehicleType}</div>
                    <h5>Fare per Ticket: <span className='font-bold'>{ticketPrice}</span>Tk</h5>
                    <div className="">
                        <button onClick={()=>handleBuyPrice(vehicle)} className="btn btn-primary w-full">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vehicle;