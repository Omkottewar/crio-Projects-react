import React, { useContext } from "react";
import "./FindDoctorArea.css";
import DoctorCard from "./DoctorCard";
import { HospitalContext } from "../../Context/Contexts";
import { commercial, verified } from "../../assets";

const FindDoctorArea = () => {
  const { hospitalList } = useContext(HospitalContext);

  return (
    <div className="find-doctor-area">
      <div className="find-doctor-header">
        <p className="hospital-count">
          {hospitalList.length || 0} medical centers available in Alaska
        </p>
        <div className="verified-info">
          <img src={verified} alt="Verified" className="verified-icon" />
          <p>Book appointments with minimum wait-time & verified doctor details.</p>
        </div>
      </div>

      <div className="doctor-list-container mt-5">
        <div className="doctor-list flex flex-col gap-5">
          {hospitalList?.map((hospital, index) => {
            return (
              <DoctorCard
                key={index}
                rating={hospital["Hospital overall rating"]}
                hospitalName={hospital["Hospital Name"]}
                type={hospital["Hospital Type"]}
                address={hospital["Address"]}
                id={hospital["Provider ID"]}
              />
            );
          })}
        </div>
    <div className="v">    <img src={commercial}  alt="Commercial" className="" /></div>
      </div>
    </div>
  );
};

export default FindDoctorArea;
