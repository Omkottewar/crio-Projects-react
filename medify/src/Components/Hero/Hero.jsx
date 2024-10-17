import React from "react";
import docImg from "../../assets/docImg.png";
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero__body">
      <div className="hero__text-container">
        <div className="hero__text">
          <p className="hero__subheading">
            Skip the travel! Find Online
          </p>
          <p className="hero__heading">
            <span className="hero__highlight1">Medical</span> <span className="hero__highlight2">Centers</span>
          </p>
          <p className="hero__description">
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </p>
          <button className="hero__button">
            Find Centers
          </button>
        </div>
      </div>
      <div className="hero__image-container">
        <img className="hero__image" src={docImg} alt="Doctor" />
      </div>
    </div>
  );
};

export default Hero;
