import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Destination from './pages/destination/Destination';
import SearchFlights from './pages/book/SearchFlights';
import SearchHotels from "./pages/hotels/SearchHotels"
import ETickets from "./pages/tickets/ETickets"
import FlightStatus from "./pages/flightstatus/FlightStatus"
import Support from "./pages/support/Support"
import Profile from "./pages/profile/Profile"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/searchflights" element={<SearchFlights />} />
        <Route path="/searchhotels" element={<SearchHotels />} />
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