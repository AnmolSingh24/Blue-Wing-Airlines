import { useForm } from "react-hook-form"
import BookHotel from "./BookHotel"

const SearchHotels = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className='relative h-screen overflow-hidden bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('https://res.cloudinary.com/djdblxcxt/image/upload/v1695484913/Hotel-Background_xrufrq.png')" }}>
            <div className='relative z-2 flex items-center justify-center gap-4 h-full'>
                <div className='w-[36rem] h-[32rem] bg-white p-8 rounded-lg'>
                    <h1 className='font-bold text-blue-600 text-3xl text-center mb-6'>Search Hotel</h1>
                    <form className='grid grid-cols-2 gap-4' onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="city">Select City</label>
                            <input
                                className='border border-gray-500 rounded px-3 py-2 w-full'
                                type="text"
                                id="city"
                                {...register("city", { required: true })}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                className='border border-gray-500 rounded px-3 py-2 w-full'
                                type="text"
                                id="email"
                                {...register("email", { required: true })}
                            />
                        </div>
                        <div>
                            <label htmlFor="from">From</label>
                            <input
                                className='border border-gray-500 rounded px-3 py-2 w-full'
                                type="time"
                                id="from"
                                {...register("from", { required: true })}
                            />
                        </div>
                        <div>
                            <label htmlFor="to">To</label>
                            <input
                                className='border border-gray-500 rounded px-3 py-2 w-full'
                                type="time"
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
                            <label htmlFor="contact">Contact</label>
                            <input
                                className='border border-gray-500 rounded px-3 py-2 w-full'
                                type="text"
                                id="contact"
                                {...register("contact", { required: true })}
                            />
                        </div>
                        <div>
                            <label htmlFor="guests">No. of Guests</label>
                            <input
                                className='border border-gray-500 rounded px-3 py-2 w-full'
                                type="number"
                                id="guests"
                                {...register("guests", { required: true })}
                            />
                        </div>
                        <div>
                            <label htmlFor="roomType">Room Type</label>
                            <select className='border border-gray-500 rounded px-3 py-2 w-full' id="roomType" {...register("roomType", { required: true })}>
                                <option value="pleaseSelect">Please Select</option>
                                <option value="single">Single</option>
                                <option value="double">Double</option>
                                <option value="suite">Suite</option>
                            </select>
                        </div>
                        <div className='flex items-center justify-center col-span-2'>
                            <button className='bg-blue-600 text-white py-2 px-10 rounded hover:bg-blue-700'>Search Hotel</button>
                        </div>
                    </form>
                </div>
                <BookHotel />
            </div>
        </div>
    )
}

export default SearchHotels

{/* <form onSubmit={handleSubmit(onSubmit)}>
    <input {...register("firstName", { required: true, maxLength: 20 })} />
    <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
    <input type="number" {...register("age", { min: 18, max: 99 })} />
    <input type="submit" />
</form> */}