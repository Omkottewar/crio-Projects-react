import React from "react";
import "./SearchArea.css";
import DocVector from "../../assets/DocVector.svg";
import labVector from "../../assets/labVector.svg";
import HospitalVector from "../../assets/HospitalVector.svg";
import CapsuleVector from "../../assets/CapsuleVector.svg";
import AmbulanceVector from "../../assets/AmbulanceVector.svg";
import search from "../../assets/search.svg";
import Cards from "./Cards";

const SearchArea = () => {
  const cards = [
    {
      name: "Doctors",
      image: DocVector,
    },
    {
      name: "Labs",
      image: labVector,
    },
    {
      name: "Hospitals",
      image: HospitalVector,
    },
    {
      name: "Medical Store",
      image: CapsuleVector,
    },
    {
      name: "Ambulance",
      image: AmbulanceVector,
    },
  ];

  return (
    <div className="searchArea__body rounded-2xl ">
      <div className="searchArea__input ml-[204px]">
        <form action="" className="searchArea__form">
          <div className="form__input">
            <img className="" src={search} placeholder="State" alt="" />
            <input type="text" />
          </div>
          <div className="form__input">
            <img className="" src={search} placeholder="City" alt="" />
            <input type="text" />
          </div>
          <button className="flex gap-2">
            {" "}
            <img src={search} alt="search icon" /> Search
          </button>
        </form>
      </div>
      <div className="searchArea__content">
        <h2 className="font-medium text-xl">You may be Looking for</h2>
        <div className="cards-container flex mx-[35px] gap-[20px]">
          {/* {cards.map((item, index) => {
            return (
              <Cards data={item} key={index} /> 
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default SearchArea;
