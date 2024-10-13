import React from "react";
import "./SpecialistComponent.css";
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SpecialistComponent = ({ specialists }) => {
  return (
    <div className="specialist-container">
      <h1>Our Medical Specialist</h1>
      <div className="swiper-wrapper">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={4}
        >
          {specialists.map((specialist, index) => {
            console.log(specialist.image)
            return (
              <SwiperSlide key={index}>
                <div className="specialist-slide">
                  <img
                    className=""
                    src={specialist.image}
                    alt={specialist.name}
                  />
                  <h3>{specialist.name}</h3>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SpecialistComponent;
