import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import { Toaster } from 'react-hot-toast';
import About from './pages/about/About';
import Destination from './pages/destination/Destination';
import BookFlights from './pages/book/BookFlights';
import Hotels from "./pages/hotels/Hotels"
import ETickets from "./pages/tickets/ETickets"
import FlightStatus from "./pages/flightstatus/FlightStatus"
import Support from "./pages/support/Support"
import Profile from "./pages/profile/Profile"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/bookflights" element={<BookFlights />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/etickets" element={<ETickets />} />
        <Route path="/flightstatus" element={<FlightStatus />} />
        <Route path="/support" element={<Support />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;