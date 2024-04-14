import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import ReactCardFlip from 'react-card-flip';
import SignUp from "../signup/Signup"

const Login = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(prevIsFlipped => !prevIsFlipped);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className='relative w-screen h-screen overflow-hidden bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('https://res.cloudinary.com/djdblxcxt/image/upload/v1695484926/login-signup-banner_gmvvlu.png')" }}>
      <div className='relative z-2 flex items-center justify-center gap-4 h-full'>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div className='w-96 h-[25rem] bg-white p-8 rounded-lg'>
            <h1 className='font-bold text-blue-600 text-3xl text-center'>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex items-center justify-center gap-2 mt-2'>
                <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1712760856/BlueWingLogo_keleuk.png" alt="logo" className='w-20 h-20' />
                <div>
                  <h1 className='text-blue-600 text-lg'><span className='font-bold text-blue-800'>BLUE</span> WING Airlines</h1>
                </div>
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
              <div className='my-3'>
                <label htmlFor="loginPpassword">Password</label>
                <input
                  className='border border-gray-500 rounded px-3 py-2 w-full'
                  type="password"
                  id="loginPpassword"
                  {...register("loginPpassword", { required: true })}
                />
              </div>
              <div className='flex items-center justify-center col-span-2'>
                <button className='bg-blue-600 text-white py-2 px-10 rounded hover:bg-blue-700'>Login</button>
              </div>
              <div className='pt-2 text-center'>
                <p>Don't have an account?
                  <Link to="/" className='text-blue-600' onClick={handleClick}> Signup</Link>
                </p>
              </div>
            </form>
          </div>
          <div className='w-96 h-[34rem] bg-white p-8 rounded-lg'>
            <SignUp setShowSignUp={setShowSignUp} handleSubmit={handleSubmit} register={register} showSignUp={showSignUp} />
          </div>
        </ReactCardFlip>
      </div>
    </div>
  )
}

export default Login

// const SignUp = ({ setShowSignUp, handleSubmit, register }) => {
//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   const handleClick = (e) => {
//     e.preventDefault();
//     setShowSignUp(false); // Hide the SignUp component
//   };

//   return (
//     <div>
//       <h1 className='font-bold text-blue-600 text-3xl text-center'>Signup</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className='flex items-center justify-center gap-2 mt-2'>
//           <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1712760856/BlueWingLogo_keleuk.png" alt="logo" className='w-20 h-20' />
//           <div>
//             <h1 className='text-blue-600 text-lg'><span className='font-bold text-blue-800'>BLUE</span> WING Airlines</h1>
//           </div>
//         </div>

//         <div>
//           <label htmlFor="fullname">Fullname</label>
//           <input
//             className='border border-gray-500 rounded px-3 py-2 w-full'
//             type="text"
//             id="fullname"
//             {...register("fullname", { required: true })}
//           />
//         </div>
//         <div className='my-1'>
//           <label htmlFor="username">Username</label>
//           <input
//             className='border border-gray-500 rounded px-3 py-2 w-full'
//             type="text"
//             id="username"
//             {...register("username", { required: true })}
//           />
//         </div>
//         <div className='my-1'>
//           <label htmlFor="signUpPassword">Password</label>
//           <input
//             className='border border-gray-500 rounded px-3 py-2 w-full'
//             type="password"
//             id="signUpPassword"
//             {...register("signUpPassword", { required: true })}
//           />
//         </div>
//         <div className='my-1'>
//           <label htmlFor="signUpConfirmPassword">Confirm Password</label>
//           <input
//             className='border border-gray-500 rounded px-3 py-2 w-full'
//             type="password"
//             id="signUpConfirmPassword"
//             {...register("signUpConfirmPassword", { required: true })}
//           />
//         </div>
//         <div className='flex items-center justify-center col-span-2 mt-0'>
//           <button type="submit" className='mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700'>Signup</button>
//         </div>
//         <div className='pt-2 text-center'>
//           <p>Already have an account?
//             <Link to="/" className='text-blue-600' onClick={handleClick}> Login</Link>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };