// import React, { useState } from 'react';
// import { toast } from "react-hot-toast"

// const TicketResults = ({from, depTime, time, arrTime, to, price, book}) => {
//   return (
//     <>
//       <div className='w-[45rem] h-[6rem] bg-white rounded'>
//         <div className='flex items-center justify-between gap-4 m-3'>
//           <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1712760856/BlueWingLogo_keleuk.png" alt="/Flight-Img" className='w-16 h-16' />
//           <div className='flex items-center gap-4'>
//             <p className='font-bold text-2xl'>{from}</p>
//             <p className='font-bold text-lg'>{depTime}</p>
//             <p className='font-semibold text-lg text-gray-500'>{time}</p>
//             <p className='font-bold text-lg'>{arrTime}</p>
//             <p className='font-bold text-2xl'>{to}</p>
//             <p>{price}</p>
//           </div>
//           <div className='bg-blue-600 px-3 py-2 rounded text-white font-bold'>
//             <button>{book}</button>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// const Book = () => {

//   const [showFlightResults, setShowFlightResults] = useState();
//   const [selectedValue, setSelectedValue] = useState("");

// roundTrip.disabled = true;
// oneWay.addEventListener('change', function () {
//   if (oneWay.checked) {
//     roundTrip.disabled = true;
//   } else {
//     roundTrip.disabled = false;
//   }
// });

// roundTrip.addEventListener('change', function () {
//   if (roundTrip.checked) {
//     oneWay.disabled = true;
//   } else {
//     oneWay.disabled = false;
//   }
// });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const oneWay = document.getElementById('oneWay');
//     const roundTrip = document.getElementById('roundTrip')
//     var firstname = document.getElementById('firstname');
//     var lastname = document.getElementById('lastname');
//     var from = document.getElementById('from');
//     var to = document.getElementById('to');
//     var date = document.getElementById('date');
//     var classType = document.getElementById('classType');
//     var adult = document.getElementById('adult');
//     var child = document.getElementById('child');

//     console.log("Hii");
//     if (oneWay === " " || roundTrip === " " || firstname === " " || lastname === " " || from === " " || to === " " || date === " " || classType === " " || adult === " " || child === " ") {
//       toast.error("Please fill in all fields");
//     }

// useEffect(() => {
//   const getResults = async () => {
//     //const url = 'https://flight-fare-search.p.rapidapi.com/v2/flights/?from=BOM&to=DEL&date=2024-04-11&adult=1&type=economy&currency=USD';
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': '59f66912aemshc9f0db0d32e7ebfp15542ajsna3f41fe29ff6',
//         'X-RapidAPI-Host': 'flight-fare-search.p.rapidapi.com'
//       }
//     };

//     try {
//       const res = await fetch(url, options);
//       const result = await res.json();
//       console.log(result);
//       setShowFlightResults(showFlightResults);
//     } catch (error) {
//       console.error(error.message);
//       toast.error(error.message)
//     }
//   }
//   getResults();
// }, []);
//   }

//   return (
//     <div className='relative h-screen overflow-hidden bg-no-repeat' style={{ backgroundImage: "url('https://res.cloudinary.com/djdblxcxt/image/upload/v1695484858/Book-Flight-banner_gonrkg.jpg')" }}>

//       {/* Booking form */}
//       <div className='relative z-2 flex items-center justify-center gap-4 h-full'>
//         <div className='w-[36rem] h-[35rem] bg-white p-8 rounded-lg'>
//           <h1 className='font-bold text-blue-600 text-3xl text-center mb-6'>Search Flight</h1>
//           <form className='grid grid-cols-2 gap-4'>
//             <div>
//               <input
//                 className='border border-gray-500 rounded px-3 py-2 w-15 cursor-pointer'
//                 type="radio"
//                 id="oneWay"
//                 name="tripType"
//                 onChange={(e) => setSelectedValue(e.target.value)}
//                 value={selectedValue}
//               />
//               <label htmlFor="oneWay" className='ml-2'>One Way</label>
//             </div>
//             <div>
//               <input
//                 className='border border-gray-500 rounded px-3 py-2 w-15 cursor-pointer'
//                 type="radio" id="roundTrip"
//                 name="tripType"
//                 onChange={(e) => setSelectedValue(e.target.value)}
//                 value={selectedValue}
//               />
//               <label htmlFor="roundTrip" className='ml-2'>Round Trip</label>
//             </div>
//             <div>
//               <label htmlFor="firstname">First name</label>
//               <input
//                 className='border border-gray-500 rounded px-3 py-2 w-full'
//                 type="text"
//                 id="firstname"
//                 onChange={(e) => setSelectedValue(e.target.value)}
//                 value={selectedValue}
//               />
//             </div>
//             <div>
//               <label htmlFor="lastname">Last name</label>
//               <input
//                 className='border border-gray-500 rounded px-3 py-2 w-full'
//                 type="text"
//                 id="lastname"
//                 onChange={(e) => setSelectedValue(e.target.value)}
//                 value={selectedValue}
//               />
//             </div>
//             <div>
//               <label htmlFor="from">From</label>
//               <input
//                 className='border border-gray-500 rounded px-3 py-2 w-full'
//                 type="text"
//                 id="from"
//                 onChange={(e) => setSelectedValue(e.target.value)}
//                 value={selectedValue}
//               />
//             </div>
//             <div>
//               <label htmlFor="to">To</label>
//               <input
//                 className='border border-gray-500 rounded px-3 py-2 w-full'
//                 type="text"
//                 id="to"
//                 onChange={(e) => setSelectedValue(e.target.value)}
//                 value={selectedValue}
//               />
//             </div>
//             <div>
//               <label htmlFor="date">Date</label>
//               <input
//                 className='border border-gray-500 rounded px-3 py-2 w-full'
//                 type="date"
//                 id="date"
//                 onChange={(e) => setSelectedValue(e.target.value)}
//                 value={selectedValue}
//               />
//             </div>
//             <div>
//               <label htmlFor="classType">Class</label>
//               <input
//                 className='border border-gray-500 rounded px-3 py-2 w-full'
//                 type="text"
//                 id="classType"
//                 onChange={(e) => setSelectedValue(e.target.value)}
//                 value={selectedValue}
//               />
//             </div>
//             <div>
//               <label htmlFor="adult">Adult</label>
//               <input
//                 className='border border-gray-500 rounded px-3 py-2 w-full'
//                 type="number"
//                 id="adult"
//                 onChange={(e) => setSelectedValue(e.target.value)}
//                 value={selectedValue}
//               />
//             </div>
//             <div>
//               <label htmlFor="child">Child</label>
//               <input
//                 className='border border-gray-500 rounded px-3 py-2 w-full'
//                 type="number"
//                 id="child"
//                 onChange={(e) => setSelectedValue(e.target.value)}
//                 value={selectedValue}
//               />
//             </div>
//           </form>
//           <div className='flex items-center justify-center'>
//             <button onClick={handleSubmit} className='mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700'>Search Flight</button>
//           </div>
//         </div>

//         {/* Show Flight Availability */}
//         {showFlightResults && <div className='w-[45rem] h-[6rem] bg-white rounded'>
//           <div className='flex items-center justify-between gap-4 m-3'>
//             <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1712760856/BlueWingLogo_keleuk.png" alt="/Flight-Img" className='w-16 h-16' />
//             <div className='flex items-center gap-4'>
//               <p className='font-bold text-2xl'>From</p>
//               <p className='font-bold text-lg'>Dep Time</p>
//               <p className='font-semibold text-lg text-gray-500'>Time</p>
//               <p className='font-bold text-lg'>Arr Time</p>
//               <p className='font-bold text-2xl'>To</p>
//               <p>Price</p>
//             </div>
//             <div className='bg-blue-600 px-3 py-2 rounded text-white font-bold'>
//               <button>Book</button>
//             </div>
//           </div>
//         </div>}
//       </div>
//     </div>
//   );
// };

// export default Book;


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import BookFlight from './BookFlight';

const SearchFlight = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    //console.log(data);

    //const url = `https://flight-fare-search.p.rapidapi.com/v2/flights/?from=${data.from}&to=${data.to}&date=${data.date}&adult=${data.adult}&type=${data.class}&currency=USD`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '59f66912aemshc9f0db0d32e7ebfp15542ajsna3f41fe29ff6',
        'X-RapidAPI-Host': 'flight-fare-search.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json(); // Assuming the response is JSON
      Console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='relative h-screen overflow-hidden bg-no-repeat' style={{ backgroundImage: "url('https://res.cloudinary.com/djdblxcxt/image/upload/v1695484858/Book-Flight-banner_gonrkg.jpg')" }}>

      {/* Booking form */}
      <div className='relative z-2 flex items-center justify-center gap-4 h-full'>
        <div className='w-[36rem] h-[35rem] bg-white p-8 rounded-lg'>
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
              <label htmlFor="firstname">First name</label>
              <input
                className='border border-gray-500 rounded px-3 py-2 w-full'
                type="text"
                id="firstname"
                {...register("firstname", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="lastname">Last name</label>
              <input
                className='border border-gray-500 rounded px-3 py-2 w-full'
                type="text"
                id="lastname"
                {...register("lastname", { required: true })}
              />
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

        {/* Show Flight Availability */}
        {/* {flightResults && <div className='w-[45rem] h-[6rem] bg-white rounded'>
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
              <button>Book</button>
            </div>
          </div>
        </div>} */}
        <BookFlight />
      </div>
    </div>
  );
};

export default SearchFlight;