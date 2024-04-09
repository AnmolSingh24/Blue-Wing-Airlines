import Home from './pages/home/Home.jsx'
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
