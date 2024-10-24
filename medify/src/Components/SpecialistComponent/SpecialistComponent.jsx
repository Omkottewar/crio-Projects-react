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
      <h1 className="specialist-title">Our Medical Specialists</h1>
      <div className="swiper-wrapper">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 1 },  // For mobile
            768: { slidesPerView: 3 },  // For tablets
            1024: { slidesPerView: 4 }  // For desktop
        }}
        >
          {specialists.map((specialist, index) => (
            <SwiperSlide key={index}>
              <div className="specialist-slide">
                <img
                  className="specialist-image"
                  src={specialist.image}
                  alt={specialist.name}
                />
                <h3 className="specialist-name">{specialist.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SpecialistComponent;
