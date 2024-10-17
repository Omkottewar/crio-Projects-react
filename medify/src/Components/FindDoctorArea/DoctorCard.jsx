import React, { useContext, useRef, useState } from "react";
import "./DoctorCard.css";
import { doctorCardImage, thumbsUp } from "../../assets"; 
import { printFormattedDates } from "./dateFunction";
import SlotPannel from "../SlotPannel/SlotPannel";
import { BookingContext } from "../../Context/Contexts";

const DoctorCard = ({ hospitalName, address, type, rating, id }) => {
  const datesArray = useRef(printFormattedDates());
  const { bookingList, setBookingList } = useContext(BookingContext);

  const [slotTime, setSlotTime] = useState('');
  const [showSlot, setShowSlot] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const slotClicked = (time) => {
    setSlotTime(time);
  };

  const handleDateSelect = (enteredDate) => {
    setSelectedDate(enteredDate);
  };

  const handleDetailsSubmit = () => {
    if (showSlot) {
      const data = {
        id,
        time: slotTime,
        date: selectedDate,
        name:hospitalName,
        address,
        type,
        rating
      };
  
      if (data.time && data.date) {
        if (window.confirm(`Are you sure you want to book the slot at ${data.time} on ${data.date}?`)) {
          // Update context
          setBookingList((prevList) => [...prevList, data]);
  
          // Retrieve existing bookings from localStorage
          let existingBookings = localStorage.getItem("bookings");
  
          // If `bookings` is null or cannot be parsed, initialize as an empty array
          try {
            existingBookings = existingBookings ? JSON.parse(existingBookings) : [];
          } catch (e) {
            existingBookings = [];
          }
  
          // Ensure existingBookings is an array before spreading
          if (Array.isArray(existingBookings)) {
            const updatedBookings = [...existingBookings, data];
  
            // Save updated bookings back to localStorage
            localStorage.setItem("bookings", JSON.stringify(updatedBookings));
          } else {
            // If existingBookings is not an array, reset it with the new data
            localStorage.setItem("bookings", JSON.stringify([data]));
          }
        }
      } else {
        alert("Please select both a date and time.");
      }
    } else {
      setShowSlot(true);
    }
  };
  

  return (
    <div className="bg-white rounded-2xl p-5">
      <div className="doctor-card">
        <img src={doctorCardImage} className="doctor-card-image" alt="Doctor" />
        <div className="doctor-card-content">
          <div className="doctor-card-info">
            <h2 className="doctor-card-hospital-name mb-2">{hospitalName}</h2>
            <p className="doctor-card-hospital-location">{address}</p>
            <p className="doctor-card-speciality">{type}</p>
            <p>more</p>
            <div className="doctor-card-fee flex gap-2 items-center mb-2">
              <p className="doctor-card-consultation-fee">Free</p>
              <p className="doctor-card-clinic-text">
                Consultation fee at clinic
              </p>
            </div>
            <div className="doctor-card-rating">
              <img src={thumbsUp} alt="Thumbs Up" className="thumbs-up-icon" />
              <p className="doctor-card-rating-number">{rating}</p>
            </div>
          </div>
          <div className="doctor-card-availability">
            <p className="availability-text">Available Today</p>
            <button className="book-visit-btn" onClick={handleDetailsSubmit}>
              Book FREE Center
            </button>
          </div>
        </div>
      </div>
      {showSlot && (
        <div>
          <div className="flex justify-between">
            {datesArray.current?.map((slot, index) => (
              <button
                type="button"
                className="date-btn hover:border-2 hover:border-b-[#2AA7FF]"
                key={index}
                onClick={() => handleDateSelect(slot)}
              >
                {index === 0 ? "Today" : index === 1 ? "Tomorrow" : slot}
              </button>
            ))}
          </div>
          <div>
            <SlotPannel slotClicked={slotClicked} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorCard;
