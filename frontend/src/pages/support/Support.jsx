import React from 'react'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'

const SupportDetails = ({ img, title, description, link }) => {
  return (
    <>
      <div className='bg-blue-100 rounded p-4 w-[25rem]'>
        <img src={img} alt="Ask-Devi-Img" className="h-12 w-12 rounded-full bg-blue-300 shadow-md" />
        <b>{title}</b>
        <p className='leading-10'>{description} <Link className='bg-blue-800 text-white px-3 py-2 font-semibold rounded'>{link}</Link></p>
      </div>
    </>
  );
}

const Support = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-no-repeat' style={{ height: "20rem", backgroundImage: "url('https://res.cloudinary.com/djdblxcxt/image/upload/v1695484941/Support_ksgunj.webp')" }}>
        <div className="flex items-center gap-2 p-4 md:p-6 lg:p-8 lg:mx-auto">
          <div className="flex gap-4 ml-auto mr-20">
            <Link to="/Support/Help.html" className="text-white font-semibold hover:text-blue-500">FAQs</Link>
            <Link to="/Sign/Signup.html" className="text-white font-semibold hover:text-blue-500">Sign-In</Link>
          </div>
        </div>
        <div className="ml-16 md:ml-20 lg:ml-24 font-bold text-4xl text-gray-300">
          <h1>CONTACT US</h1>
        </div>
      </div>

      <div className='flex items-center justify-center gap-4 mt-8'>
        <SupportDetails
          img="https://res.cloudinary.com/djdblxcxt/image/upload/v1696690879/upload/ef7dxqgzydru8uyp0uqv.png"
          title="Ask Devi"
          description="Looking for quick answers to your questions?Chat with our AI agent and"
          link="See how it works."
        />

        <SupportDetails
          img="https://res.cloudinary.com/djdblxcxt/image/upload/v1695484882/Customer-Service_z7sqtz.avif"
          title="Contact Customer Service"
          description="Submit your queries here. You will hear back from an agent within 24 hours."
          link="Submit"
        />
      </div>

      <Footer />
    </div>
  )
}

export default Support