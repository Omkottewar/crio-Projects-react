import React from "react";
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
      <div className="flex flex-col items-center bg-gradient-to-r from-[#E7F0FF] to-[rgba(232,241,255,0.47)]">
        <span className="bg-[#2AA7FF] w-screen text-center text-[14px] h-[40px]">
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </span>
        <Navbar />
        <Hero />
        <SearchArea />
        <DiscountCarousel/>

        <SpecialistComponent specialists={specialists} />
        <PatientCaring/>
        <LatestNews/>
        <FamilyComponent/>
        <FrequentQuestions/>
      </div>
    </div>
  );
};

export default Home;
