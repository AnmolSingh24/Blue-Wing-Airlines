import React, { useState, useEffect } from 'react';
import { extractFlightDetails } from '../../utils/extractFlightDetails';
import { GoArrowRight } from 'react-icons/go';

const BookFlight = ({ data }) => {
    console.log(data)
    const [convertedTotal, setConvertedTotal] = useState(null);

    const {
        flight_code,
        departureAirport,
        arrivalAirport,
        duration,
        stops,
        totals,
    } = data;

    useEffect(() => {
        const fetchConversionRates = async () => {
            try {
                const response = await fetch(`https://open.er-api.com/v6/latest`);
                const data = await response.json();
                const conversionRate = data.rates.INR;
                const convertedAmount = Math.floor(totals.total * conversionRate);
                setConvertedTotal(convertedAmount);
            } catch (error) {
                console.error('Error fetching conversion rates:', error);
            }
        };

        fetchConversionRates();
    }, [totals.total]);

    const handleSubmit = () => { };

    return (
        <>
            <div className='flex items-center gap-3 px-6 py-2'>
                <p className='font-semibold'>{departureAirport.city}</p>
                <GoArrowRight />
                <p className='font-semibold'>{arrivalAirport.city}</p>
            </div>
            <div>
                <div className='w-[35rem] h-[4.5rem] bg-white rounded'>
                    <div className="flex items-center justify-center gap-4 m-2">
                        <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1712760856/BlueWingLogo_keleuk.png" alt="/Flight-Img" className='w-16 h-16' />
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-xs text-blue-600 -ml-4'>BLUE WING</h1>
                            <p className='text-xs -ml-4'>{flight_code}</p>
                        </div>
                        <div className='flex items-center gap-4 mt-2'>
                            <p className='font-bold text-base'>{extractFlightDetails(departureAirport.time)}</p>
                            <div className='flex flex-col'>
                                <p className='font-normal text-xs text-gray-500'>{duration.text}</p>
                                <p className='font-normal text-xs text-gray-500'>{stops}</p>
                            </div>
                            <p className='font-bold text-base'>{extractFlightDetails(arrivalAirport.time)}</p>
                            {convertedTotal && <p className='font-bold'>₹ {convertedTotal}</p>}
                        </div>
                        <div className='bg-blue-600 px-3 py-2 mt-2 rounded text-white font-bold'>
                            <button onClick={handleSubmit}>Book</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookFlight;