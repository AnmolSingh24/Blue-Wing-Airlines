import { useState } from 'react'

const BookHotel = () => {
    const [hotelResults, setHotelResults] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setHotelResults(hotelResults);
    }

    return (
        <div>
            {hotelResults ?
                <form onSubmit={handleSubmit}>
                    <div className='w-[40rem] h-[4.5rem] bg-white rounded'>
                    <div className='flex items-center justify-evenly gap-4 m-3'>
                        <img src="https:res.cloudinary.com/djdblxcxt/image/upload/v1712760856/BlueWingLogo_keleuk.png" alt="/Flight-Img" className='w-16 h-16' />
                        <div className='flex items-center gap-4'>
                            <p className='font-bold text-2xl'>HotelName</p>
                            <p className='font-bold text-base'>Check-In</p>
                            <p className='font-bold text-base'>Check-Out</p>
                            <p>₹Price</p>
                        </div>
                        <div className='bg-blue-600 px-3 py-2 rounded text-white font-bold'>
                            <button>Book</button>
                        </div>
                    </div>
                </div>
                </form> : ""}
        </div>
    )
}

export default BookHotel



//import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import ReactCardFlip from 'react-card-flip';

// const SearchHotel = () => {
//   const { register, handleSubmit } = useForm();
//   const [showMoreDetails, setShowMoreDetails] = useState(false);
//   const [showBookHotel, setShowBookHotel] = useState(false);
//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleClick = (e) => {
//     e.preventDefault();
//     setIsFlipped(prevIsFlipped => !prevIsFlipped);
//   };

//   const handleSearch = (data) => {
//     console.log(data); // Log the form data
//     setShowBookHotel(true);
//   };

//   return (
//     <div className='relative w-screen h-screen bg-cover bg-center overflow-hidden bg-no-repeat' style={{ backgroundImage: "url('https://res.cloudinary.com/djdblxcxt/image/upload/v1695484913/Hotel-Background_xrufrq.png')" }}>
//       {/* Booking form */}
//       <div className='relative z-2 flex items-center justify-center gap-4 h-full'>
//         <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
//           <div className='w-[36rem] h-[29rem] bg-white p-8 rounded-lg'>
//             <h1 className='font-bold text-blue-600 text-3xl text-center mb-6'>Search Hotel</h1>
//             <form className='grid grid-cols-2 gap-2' onSubmit={handleSubmit(handleSearch)}>
//               <div>
//                 <label htmlFor="firstname">Firstname</label>
//                 <input className='border border-gray-500 rounded px-3 py-2 w-full' type="text" id="firstname" {...register("firstname")} />
//               </div>
//               <div>
//                 <label htmlFor="lastname">Lastname</label>
//                 <input className='border border-gray-500 rounded px-3 py-2 w-full' type="text" id="lastname" {...register("lastname")} />
//               </div>
//               <div>
//                 <label htmlFor="email">Email</label>
//                 <input className='border border-gray-500 rounded px-3 py-2 w-full' type="email" id="email" {...register("email")} />
//               </div>
//               <div>
//                 <label htmlFor="date">Date</label>
//                 <input className='border border-gray-500 rounded px-3 py-2 w-full' type="date" id="date" {...register("date")} />
//               </div>
//               <div>
//                 <label htmlFor="checkIn">Check-In</label>
//                 <input className='border border-gray-500 rounded px-3 py-2 w-full' type="time" id="checkIn" {...register("checkIn")} />
//               </div>
//               <div>
//                 <label htmlFor="checkOut">Check-Out</label>
//                 <input className='border border-gray-500 rounded px-3 py-2 w-full' type="time" id="checkOut" {...register("checkOut")} />
//               </div>
//               <div>
//                 <label htmlFor="guests">No. of Guests</label>
//                 <input className='border border-gray-500 rounded px-3 py-2 w-full' type="number" id="guests" {...register("guests")} />
//               </div>
//               <div>
//                 <label htmlFor="roomType">Room Type</label>
//                 <select className='border border-gray-500 rounded px-3 py-2 w-full' id="roomType" {...register("roomType")}>
//                   <option value="pleaseSelect">Please Select</option>
//                   <option value="single">Single</option>
//                   <option value="double">Double</option>
//                   <option value="suite">Suite</option>
//                 </select>
//               </div>

//               <div className='flex items-center justify-end col-span-2'>
//                 <button className='mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700' onClick={handleClick}>Continue</button>
//                 {showMoreDetails && <button className='mt-4 ml-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700' type="submit">Search</button>}
//               </div>
//             </form>
//           </div>
//           <div className='w-[36rem] h-[21rem] bg-white p-8 rounded-lg'>
//             <MoreDetails setShowBookHotel={setShowBookHotel} handleSubmit={handleSubmit} register={register} />
//           </div>
//         </ReactCardFlip>
//       </div>
//     </div>
//   );
// };

// const MoreDetails = ({ setShowBookHotel, handleSubmit, register }) => {
//   const onSubmit = (data) => {
//     console.log(data);
//     setShowBookHotel(true);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <div className="flex flex-cols items-center justify-start gap-4">
//             <p>Free Pickup?</p>
//             <div className="flex">
//               <input
//                 className='border border-gray-500 rounded px-3 py-2 w-15 cursor-pointer'
//                 type="radio"
//                 id="yesPickup"
//                 name="pickup"
//                 {...register("yesPickup", { required: true })}
//               />
//               <label htmlFor="yesPickup" className='ml-2'>Yes, Pickup</label>
//             </div>
//             <div>
//               <input
//                 className='border border-gray-500 rounded px-3 py-2 w-15 cursor-pointer'
//                 type="radio"
//                 id="noPickUp"
//                 name="pickup"
//                 {...register("noPickup", { required: true })}
//               />
//               <label htmlFor="noPickup" className='ml-2'>No, Thanks</label>
//             </div>
//           </div>
//           <div className="flex flex-col items-start justify-start gap-3 mt-3">
//             <label htmlFor="specialRequest">Special Requests</label>
//             <textarea
//               name="specialRequest"
//               id="specialRequest"
//               cols={40} rows={5}
//               className='border border-gray-500 rounded px-3 py-2 w-15 resize-none'
//               {...register("specialRequest", { required: true })}></textarea>
//           </div>
//         </div>
//         <div className='flex items-center justify-center col-span-2'>
//           <button type="submit" className='mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700'>Search Hotel</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SearchHotel;