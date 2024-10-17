import React from 'react';
import "./DiscountCarousel.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { discount, discount2 } from '../../assets';

const DiscountCarousel = () => {
    const array = [discount, discount2, discount, discount2, discount];

    return (
        <div className="discount-carousel-container">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={4}
                breakpoints={{
                    320: { slidesPerView: 1 },  // For mobile
                    768: { slidesPerView: 1 },  // For tablets
                    1024: { slidesPerView: 2 }  // For desktop
                }}
            >
                {array.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className="discount-carousel-slide">
                            <img
                                className="discount-carousel-img"
                                src={card}
                                alt={`Discount ${index + 1}`}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default DiscountCarousel;
