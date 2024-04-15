import React from 'react'
import Footer from "../../components/footer/Footer"

const FlightStatus = () => {
  return (
    <>
      <div className='bg-cover bg-center' style={{ height: "20rem", backgroundImage: "url('https://res.cloudinary.com/djdblxcxt/image/upload/v1695484892/flight-status-banner_zm4wet.webp')" }}>
        <div className="ml-16 md:ml-20 lg:ml-24 font-bold text-4xl text-gray-300 lg:p-16">
          <h1>FLIGHT STATUS</h1>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default FlightStatus