import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { EffectFade,Autoplay, Pagination, Navigation } from 'swiper/modules';


const Homeslider = () => {
  return (
    <Swiper 
    spaceBetween={30}
    centeredSlides={true}
    effect={'fade'}
    loop={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[ EffectFade,Autoplay, Pagination, Navigation]}
    className="mySwipermain "
  >
        <SwiperSlide >
          <img src="https://miniso.pk/cdn/shop/files/Web_cover_loyalty1.png?v=1697781135" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://miniso.pk/cdn/shop/files/loyalty.png?v=1703660118" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://miniso.pk/cdn/shop/files/toys1.png?v=1689245828" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://miniso.pk/cdn/shop/files/COVER_1bead9cb-2a6a-453f-be61-46eb3e45494f.png?v=1704714240" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://miniso.pk/cdn/shop/files/cover_6990e166-204c-4ebb-8ad9-eb4d79fe69d4.png?v=1699448148" />
        </SwiperSlide>
      </Swiper>
  )
}

export default Homeslider