import React from 'react';
import "./DiscountCarousel.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { discount, discount2 } from '../../assets';

const SpecialistComponent = () => {
    const array = [discount, discount2, discount];

    return (
        <div className="specialist-container">
            <h1>Our Medical Specialists</h1>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={4}
                breakpoints={{
                    320: { slidesPerView: 1 },  // For mobile
                    768: { slidesPerView: 2 },  // For tablets
                    1024: { slidesPerView: 4 }  // For desktop
                }}
            >
                {array.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className="specialist-slide">
                            <img
                                className="specialist-img"
                                src={card}
                                alt={`Specialist ${index + 1}`}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SpecialistComponent;
