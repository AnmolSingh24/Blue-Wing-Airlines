import React, { useState } from 'react';
import Footer from '../../components/footer/Footer';
import { FiDownload } from "react-icons/fi";
import { Link } from 'react-router-dom';

export const HeaderLinks = () => {
  return (
    <div className="flex gap-4 ml-auto mr-20">
      <Link to="/Support/Help.html" className="text-white font-semibold hover:text-blue-500">FAQs</Link>
      <Link to="/Sign/Signup.html" className="text-white font-semibold hover:text-blue-500">Sign-In</Link>
    </div>
  );
};

export const ETicketHeader = () => {
  return (
    <div className="ml-16 md:ml-20 lg:ml-24 font-bold text-4xl text-gray-300">
      <h1>E-TICKET</h1>
    </div>
  );
};

const FlightDetail = ({ title, value }) => {
  return (
    <div className="flex items-center justify-between gap-4 mt-4">
      <div>
        <b>{title}</b>
        <p>{value}</p>
      </div>
    </div>
  );
};

const FlightCharges = ({ title, value }) => {
  return (
    <div className="flex items-center gap-4 my-3">
      <b>{title}</b>
      <p>{value}</p>
    </div>
  );
};

const ETicket = () => {

  const [isTicketGenerated, setIsTicketGenerated] = useState(false);

  return (
    <div className="bg-cover bg-center bg-no-repeat" style={{ height: "20rem", backgroundImage: "url('https://res.cloudinary.com/djdblxcxt/image/upload/v1712988409/ETickets_qowh54.jpg')" }}>
      <div className="flex items-center gap-2 p-4 md:p-6 lg:p-8 lg:mx-auto">
        <HeaderLinks />
      </div>

      <ETicketHeader />

      {/* {isTicketGenerated ? */}
      (<div className="bg-violet-200 w-96 md:w-10/12 lg:w-9/12 xl:w-[51rem] mx-auto mt-16 md:mt-20 lg:mt-24 p-6 md:p-8 lg:p-10 xl:p-12 rounded">
        <div className="bg-violet-300 w-96 md:w-11/12 lg:w-10/12 xl:w-[45rem] mx-auto mt-1 md:mt-20 lg:mt-24 pt-6 md:p-8 lg:p-10 xl:p-12 rounded">
          <h1 className="text-center font-bold text-2xl text-blue-800">E-TICKET</h1>

          <div className="flex items-center justify-center pt-4">
            <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1712760856/BlueWingLogo_keleuk.png" alt="Airline-logo" className="w-28 h-28" />
            <h1 className="text-blue-800 font-bold text-3xl">BLUE WING AIRLINES</h1>
          </div>

          <div className='my-4'>
            <FlightDetail title="Guest Name" value="First Name Last Name" />
            <FlightDetail title="Booking Date" value="mm-dd-yyyy" />
          </div>

          <div className="h-0.5 w-full border bg-white"></div>
          <div className='my-4'>
            <FlightDetail title="Flight Details" value="Route" />
          </div>
          <div className="h-0.5 w-full border bg-white"></div>

          <div className='flex items-center justify-start gap-16 my-3'>
            <FlightDetail title="From" value="Location" />
            <FlightDetail className='font-bold' title="Airline" value="BLUE WING Airlines" />
            <FlightDetail title="Departure Date" value="mm-dd-yyyy" />
            <FlightDetail title="Arrival Date" value="mm-dd-yyyy" />
          </div>

          <div className='flex items-center justify-start gap-12 my-4'>
            <FlightDetail title="To" value="Location" />
            <FlightDetail title="Flight Number" value="Number" />
            <FlightDetail title="Departure Terminal" value="Terminal 1" />
            <FlightDetail title="Arrival Terminal" value="Terminal 5" />
          </div>

          <div className="h-0.5 w-full border bg-white"></div>

          <div className='flex items-center justify-start gap-20 my-4'>
            <FlightDetail title="Seat Class" value="3-A" />
            <FlightDetail title="Seat Number" value="Number" />
            <FlightDetail title="Purchase Extra Baggage Allowance" value="25 Kilos is provided for every passenger" />
          </div>


          <div className="h-0.5 w-full border bg-white"></div>
          <h2 className="font-bold text-xl mt-4">Fare Breakdown</h2>
          <FlightCharges title="Base Fare" value="$" />
          <FlightCharges title="Surcharge" value="$" />
          <FlightCharges title="Fuel/Insurance Surcharge" value="$" />
          <FlightCharges title="Passenger Service Charge" value="$" />
          <FlightCharges title="Ticketing Service Charge" value="$" />
          <div className="h-0.5 w-full border bg-white"></div>
          <FlightCharges title="Total Amount" value="$" />
          <div className="h-0.5 w-full border bg-white"></div>

          <div className='my-4'>
            <FlightDetail title="Important Information" value="Passengers are required to bring this Itinerary/Receipt along with an official ID with photo issued by the government or known corporations upon entering the terminal.
            The airline may contact the card holder or the passenger for verification of their payment, and in case the airline suspects or has a reason to believe that the ticket(s) purchased were made fraudulently, the airline may cancel the reservation made by the passenger.
            Passengers are recommended to check-in two hours before the scheduled departure time to prevent cancellation of passenger's reservation. The airline shall not be liable for loss or damages due to passenger's failure to comply with the provisions above if without fault by the airline." />
          </div>

          <div className="h-0.5 w-full border bg-white"></div>
          <div className='text-center mt-4 font-bold text-2xl text-blue-800'>
            <h1>Thanks You For Choosing Us</h1>
            <h1>Have A Safe Flight</h1>
          </div>

          <div className='flex items-center justify-center'>
            <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mt-8">Download <FiDownload /></button>
          </div>
        </div>
      </div>
      {/* ) :
        ""
      } */}

      <Footer />
    </div>
  );
};

export default ETicket;