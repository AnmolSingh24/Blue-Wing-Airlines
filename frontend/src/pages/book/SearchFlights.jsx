import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import BookFlight from './BookFlight';
import { flightResult } from "../../mockData/SearchFlightData"
import { GoArrowRight } from "react-icons/go";

const SearchFlight = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [flightData, setFlightData] = useState([]);

  const onSubmit = async (data) => {
    if (!flightData) return [];

    console.log(data);

    //const url = `https://flight-fare-search.p.rapidapi.com/v2/flights/?from=${data.from}&to=${data.to}&date=${data.date}&adult=${data.adult}&type=${data.class}&currency=USD`;
    setFlightData(flightResult)
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': '59f66912aemshc9f0db0d32e7ebfp15542ajsna3f41fe29ff6',
    //     'X-RapidAPI-Host': 'flight-fare-search.p.rapidapi.com'
    //   }
    // };

    // try {
    //   const response = await fetch(url, options);
    //   const result = await response.json();
    //   console.log(result);
    //   setFlightData(result);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <div className='relative h-screen overflow-hidden bg-no-repeat' style={{ backgroundImage: "url('https://res.cloudinary.com/djdblxcxt/image/upload/v1695484858/Book-Flight-banner_gonrkg.jpg')" }}>

      {/* Booking form */}
      <div className='relative z-2 flex items-center justify-center gap-4 h-full'>
        <div className='w-[36rem] h-[29rem] bg-white p-8 rounded-lg'>
          <h1 className='font-bold text-blue-600 text-3xl text-center mb-6'>Search Flight</h1>
          <form className='grid grid-cols-2 gap-4' onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                className='border border-gray-500 rounded px-3 py-2 w-15 cursor-pointer'
                type="radio"
                id="oneWay"
                name="tripType"
                {...register("oneWay", { required: true })}
              />
              <label htmlFor="oneWay" className='ml-2'>One Way</label>
            </div>
            <div>
              <input
                className='border border-gray-500 rounded px-3 py-2 w-15 cursor-pointer'
                type="radio" id="roundTrip"
                name="tripType"
                {...register("roundTrip", { required: true })}
              />
              <label htmlFor="roundTrip" className='ml-2'>Round Trip</label>
            </div>
            <div>
              <label htmlFor="from">From</label>
              <input
                className='border border-gray-500 rounded px-3 py-2 w-full'
                type="text"
                id="from"
                {...register("from", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="to">To</label>
              <input
                className='border border-gray-500 rounded px-3 py-2 w-full'
                type="text"
                id="to"
                {...register("to", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="date">Date</label>
              <input
                className='border border-gray-500 rounded px-3 py-2 w-full'
                type="date"
                id="date"
                {...register("date", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="classType">Class</label>
              <input
                className='border border-gray-500 rounded px-3 py-2 w-full'
                type="text"
                id="classType"
                {...register("classType", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="adult">Adult</label>
              <input
                className='border border-gray-500 rounded px-3 py-2 w-full'
                type="number"
                id="adult"
                {...register("adult", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="child">Child</label>
              <input
                className='border border-gray-500 rounded px-3 py-2 w-full'
                type="number"
                id="child"
                {...register("child", { required: true })}
              />
            </div>
            <div className='flex items-center justify-center col-span-2'>
              <button className='bg-blue-600 text-white py-2 px-10 rounded hover:bg-blue-700'>Search Flight</button>
            </div>
          </form>
        </div>

        <div>
          {/* <div className='flex items-center gap-3 px-6 py-2'>
            <p>from</p>
            <GoArrowRight />
            <p>to</p>
          </div> */}

          <div className='mt-10'>
            {flightData.map((data) => <BookFlight data={data} />)}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SearchFlight;