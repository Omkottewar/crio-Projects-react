import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import SearchArea from "../SearchArea/SearchArea";
import SpecialistComponent from "../SpecialistComponent/SpecialistComponent";
import {
  AhmadKhan,
  AhmadStevens,
  HeenaSachdena,
  LesleyHull,
  AnkurSharma,
} from "../../assets";
import PatientCaring from "../PatientCaring/PatientCaring";
import DiscountCarousel from "../DiscountCarousel/DiscountCarousel";
import LatestNews from "../latestNews/LatestNews";
import FamilyComponent from "../FamilyComponent/FamilyComponent";
import FrequentQuestions from "../FrequentQuestions/FrequentQUestions";

const Home = () => {
  const specialists = [
    { name: "Ahmad Khan", image: AhmadKhan },
    { name: "Ahmad Stevens", image: AhmadStevens },
    { name: "Heena Sachdeva", image: HeenaSachdena },
    { name: "Lesley Hull", image: LesleyHull },
    { name: "Ankur Sharma", image: AnkurSharma },
  ];

  return (
    <div className="">
      <div className=" flex flex-col items-center bg-gradient-to-r from-[#E7F0FF] to-[rgba(232,241,255,0.47)]">
        <Hero />
        <SearchArea />
        <DiscountCarousel />
        <FindSpecialisation />
        <SpecialistComponent specialists={specialists} />
        <PatientCaring />
        <LatestNews />
        <FamilyComponent />
        <FrequentQuestions/>
      </div>
    </div>
  );
};

export default Home;
