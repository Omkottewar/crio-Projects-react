import React from "react";
import docImg from "../../assets/docImg.png";

import './Hero.css'
const Hero = () => {
  return (
    <div className="hero__body flex justify-between">
      <div className="  ">
        <div className="hero__text">
          <p className="font-medium text-[31px]">
            Skip the travel! Find Online
          </p>
          <p className=" hero__text1 font-bold text-[56px]">

            <span> Medical</span>{" "}
            <span className="text-[#2AA7FF]">Centers</span>
          </p>
          {/* <p className="hero__text w-[520px] text-[#5C6169] font-normal text-xl ">
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </p> */}
          <button className=" hero__button h-[48px] mt-[32px] w-[177px] px-[36px] py-[12px] bg-[#2AA7FF] text-white rounded-lg">
          Find Centers
        </button>
        </div>
       
      </div>
      <div className=" h-[735.94px]">
        <img className="hero__image" src={docImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
