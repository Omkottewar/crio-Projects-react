import React, { useContext, useEffect, useState } from "react";
import "./Bookings.css";
import { BookingContext } from "../../Context/Contexts";
import { commercial, doctorCardImage, thumbsUp } from "../../assets";

const Bookings = () => {
  const { bookingList } = useContext(BookingContext);
  const [filteredList, setFilteredList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredList(bookingList);
  }, [bookingList]);

  const handleSearchInput = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term) {
      const updatedList = bookingList.filter((booking) =>
        booking.hospitalName?.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredList(updatedList);
    } else {
      setFilteredList(bookingList);
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#E7F0FF]">
      
      <div className=" search-bar relative bg-[#2AA8FF] h-[110px] rounded-b-2xl mb-16">
      <h2 className="booking-heading">My Bookings</h2>
        <div className=" absolute -right-[310px] transform -translate-x-1/2 -bottom-12 bg-white  w-[780px] h-[104px] flex justify-center items-center gap-5 rounded-2xl">
          <input
            onChange={handleSearchInput}
            value={searchTerm}
            className="w-[545px] h-[50px] rounded-lg px-4"
            type="text"
            placeholder="Search by hospital name"
          />
          <button className="booking-btn px-4 py-2 bg-blue-500 text-white rounded-lg">
            Search
          </button>
        </div>
      </div>

      <div className="flex justify-between px-4">
        <div className="w-2/3">
          {filteredList.map((card, index) => {
            const { address, name, time, date, type, rating } = card;
            return (
              <div
                key={index}
                className="flex justify-between mb-6 bg-white p-4 rounded-lg shadow"
              >
                <img
                  src={doctorCardImage}
                  alt="Doctor"
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-grow ml-4">
                  <h2 className="text-xl font-bold">{name}</h2>
                  <p className="text-gray-600">{address}</p>
                  <p className="text-gray-600">{type}</p>
                  <p className="text-blue-500 cursor-pointer">more</p>
                  <div className="flex items-center mt-2">
                    <p className="text-green-500 font-bold mr-2">Free</p>
                    <p className="text-sm text-gray-500">
                      Consultation fee at clinic
                    </p>
                  </div>
                  <div className="flex items-center mt-2 w-8 rounded-md justify-between px-1 bg-[#00A500]">
                    <img
                      src={thumbsUp}
                      alt="Thumbs Up"
                      className=""
                    />
                    <p className="font-bold">{rating==="Not Available"?0 : rating}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">{time}</p>
                  <p className="text-gray-600">{date}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-1/3 pl-4">
          <img src={commercial} alt="Commercial" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Bookings;
