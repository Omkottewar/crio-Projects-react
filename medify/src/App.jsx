import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrequentQuestions from "./Components/FrequentQuestions/FrequentQUestions";
import Download from "./Components/Download/Download";
import MainFooter from "./Components/MainFooter/MainFooter";
import Navbar from "./Components/Navbar/Navbar";
import FindDoctors from "./Components/FindDoctors/FindDoctors";
import { BookingContext, HospitalContext } from "./Context/Contexts";
import Bookings from "./Components/Bookings/Bookings";
function App() {
  const [hospitalList, setHospitalList] = useState([]);
  const [bookingList, setBookingList] = useState([]);
  console.log(bookingList)
  // localStorage.clear()
  return (
    <div className="w-screen">
      <BrowserRouter>
        <HospitalContext.Provider value={{ hospitalList, setHospitalList }}>
          <BookingContext.Provider value={{ bookingList, setBookingList }}>
            <Navbar />

            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<FindDoctors />} path="/finddoctors" />
              <Route element={<Bookings/>} path="/booking" />
            </Routes>

            <Download />
            <MainFooter />
          </BookingContext.Provider>
        </HospitalContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
