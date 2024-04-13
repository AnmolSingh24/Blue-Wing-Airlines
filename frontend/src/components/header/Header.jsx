import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='h-12 flex items-center justify-between ml-10 text-blue-500 mt-2'>
            <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1712760856/BlueWingLogo_keleuk.png" alt="logo" className='w-20' />
            <p className='-ml-[13rem] uppercase'><span className='font-extrabold uppercase text-blue-800'>Blue</span> Wing Airlines</p>
            <div className='flex gap-12 text-lg font-semibold pr-16 cursor-pointer'>
                <Link to="/about">About</Link>
                <Link to="/destination">Destination</Link>
                <Link to="/searchflights">Flights</Link>
                <Link to="/searchhotels">Hotels</Link>
                <Link to="/etickets">E-Tickets</Link>
                <Link to="/flightstatus">Flight Status</Link>
                <Link to="/support">Support</Link>
                <Link to="/profile">Profile</Link>
            </div>
        </div>
    );
}

export default Header;