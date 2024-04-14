import React, { useState } from 'react'

const BookFlight = () => {
    const [flightResults, setFlightResults] = useState(null);

    const handleSubmit = () => {
        if(!flightResults) return;
        setFlightResults(flightResults);
    }

    return (
        <div>
            {flightResults ? <div className='w-[45rem] h-[6rem] bg-white rounded'>
                <div className='flex items-center justify-between gap-4 m-3'>
                    <img src="https:res.cloudinary.com/djdblxcxt/image/upload/v1712760856/BlueWingLogo_keleuk.png" alt="/Flight-Img" className='w-16 h-16' />
                    <div className='flex items-center gap-4'>
                        <p className='font-bold text-2xl'>From</p>
                        <p className='font-bold text-lg'>Dep Time</p>
                        <p className='font-semibold text-lg text-gray-500'>Time</p>
                        <p className='font-bold text-lg'>Arr Time</p>
                        <p className='font-bold text-2xl'>To</p>
                        <p>Price</p>
                    </div>
                    <div className='bg-blue-600 px-3 py-2 rounded text-white font-bold'>
                        <button onClick={handleSubmit}>Book</button>
                    </div>
                </div>
            </div> : " "}



            {/* {flightResults.map((flight, idx) => (
                <div key={idx} className="flight-item">
                    <p>{flight.from}</p>
                    <p>{flight.departureTime}</p>
                    <p>{flight.duration}</p>
                    <p>{flight.arrivalTime}</p>
                    <p>{flight.to}</p>
                    <p>{flight.price}</p>
                    <button onClick={handleSubmit}>Book</button>
                </div>
            ))} */}
        </div>
    )
}

export default BookFlight