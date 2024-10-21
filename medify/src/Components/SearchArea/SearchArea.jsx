import React from "react";
import "./SearchArea.css";
import labVector from "../../assets/labVector.svg";
import HospitalVector from "../../assets/HospitalVector.svg";
import CapsuleVector from "../../assets/CapsuleVector.svg";
import AmbulanceVector from "../../assets/AmbulanceVector.svg";
import docVector from "../../assets/docVector.svg"; 
import Cards from "./Cards";
import SearchDoctor from "../SearchDoctor/SearchDoctor";

const SearchArea = () => {
  const cards = [
    { name: "Doctors", image: docVector },
    { name: "Labs", image: labVector },
    { name: "Hospitals", image: HospitalVector },
    { name: "Medical Store", image: CapsuleVector },
    { name: "Ambulance", image: AmbulanceVector },
  ];

  return (
    <div className="search-area ">
      <div className="search-area__input">
        <div className="search-area__input-wrapper">
          <SearchDoctor />
        </div>
      </div>
      <div className="search-area__content">
        <h2 className="search-area__heading">You may be Looking for</h2>
        <div className="cards-container">
          {cards.map((item, index) => (
            <Cards data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchArea;
