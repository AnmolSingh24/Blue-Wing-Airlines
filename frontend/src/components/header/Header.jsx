import React from 'react'
import logo from "../../assets/images/BlueWingLogo.jpg"
import About from '../../pages/about/About'
import Destination from '../../pages/destination/Destination'
import BookFlights from '../../pages/book/BookFlights'
import Hotels from '../../pages/hotels/Hotels'
import ETickets from "../../pages/tickets/ETickets"
import FlightStatus from "../../pages/flightstatus/FlightStatus"
import Support from "../../pages/support/Support"
import Profile from "../../pages/profile/Profile"

const Header = () => {
    return (
        <>
            <div className='h-12 flex items-center justify-between ml-10 text-blue-500 mt-2'>
                <img src={logo} alt="logo" className='w-20' />
                <p className='-ml-[13rem] uppercase'><span className='font-extrabold uppercase text-blue-800'>Blue</span> Wing <span className='normal-case'>Tours&Travels</span></p>
                <div className='flex gap-16 text-lg font-semibold pr-16 cursor-pointer'>
                    <About />
                    <Destination />
                    <BookFlights />
                    <Hotels />
                    <ETickets />
                    <FlightStatus />
                    <Support />
                    <Profile />
                </div>
            </div>
        </>
    )
}

export default Header