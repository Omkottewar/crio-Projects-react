import React from "react";
import "./SearchArea.css";
import DocVector from "../../assets/DocVector.svg";
import labVector from "../../assets/labVector.svg";
import HospitalVector from "../../assets/HospitalVector.svg";
import CapsuleVector from "../../assets/CapsuleVector.svg";
import AmbulanceVector from "../../assets/AmbulanceVector.svg";
import search from "../../assets/search.svg";
import Cards from "./Cards";
import SearchDoctor from "../SearchDoctor/SearchDoctor";
import { Link } from "react-router-dom";

const SearchArea = () => {
  const cards = [
    { name: "Doctors", image: DocVector },
    { name: "Labs", image: labVector },
    { name: "Hospitals", image: HospitalVector },
    { name: "Medical Store", image: CapsuleVector },
    { name: "Ambulance", image: AmbulanceVector },
  ];

  return (
   <div className="search-area">
      <div className="search-area__input">
       <div className=" relative -bottom-14 left-28">
       <SearchDoctor/>
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
