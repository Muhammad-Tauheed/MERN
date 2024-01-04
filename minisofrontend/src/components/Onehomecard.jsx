import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination,Navigation} from 'swiper/modules';

const Onehomecard = () => {
  return (
    <div>
    <Swiper 
        slidesPerView={6}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination,Navigation]}
        className="mySwiper2 container d-flex justify-content-center  swiper2"
      >
        <SwiperSlide className='zoom'><img src="https://miniso.pk/cdn/shop/files/Untitled-15_300x.png?v=1684827976" alt=""/></SwiperSlide>
        <SwiperSlide className='zoom'><img src="https://miniso.pk/cdn/shop/files/Untitled-13_300x.png?v=1684827636" alt="" /></SwiperSlide>
        <SwiperSlide className='zoom'><img src="https://miniso.pk/cdn/shop/files/Untitled-22_300x.png?v=1684828071" alt="" /></SwiperSlide>
        <SwiperSlide className='zoom'><img src="https://miniso.pk/cdn/shop/files/Untitled-16_300x.png?v=1684827976" alt="" /></SwiperSlide>
        <SwiperSlide className='zoom'><img src="https://miniso.pk/cdn/shop/files/Untitled-123_300x.png?v=1684828162" alt="" /></SwiperSlide>
        <SwiperSlide className='zoom'><img src="https://miniso.pk/cdn/shop/files/Untitled-14_300x.png?v=1684827718" alt="" /></SwiperSlide>
        <SwiperSlide className='zoom'><img src="https://miniso.pk/cdn/shop/files/Untitled-18_300x.png?v=1684827976" alt="" /></SwiperSlide>
        <SwiperSlide className='zoom'><img src="https://miniso.pk/cdn/shop/files/11_sale_thumb_c882f630-78b4-45de-8af5-f5e527841ebb_300x.png?v=1699567532" alt="" /></SwiperSlide>
        <SwiperSlide className='zoom'><img src="https://miniso.pk/cdn/shop/files/Untitled-19_300x.png?v=1684827976" alt="" /></SwiperSlide>
        <SwiperSlide className='zoom'><img src="https://miniso.pk/cdn/shop/files/Untitled-1_6fc988fa-eae2-421e-8a9a-64d35b2b4fe8_300x.png?v=1684827489" alt="" /></SwiperSlide>
        <SwiperSlide className='zoom'><img src="https://miniso.pk/cdn/shop/files/Untitled-12_300x.png?v=1684827589" alt="" /></SwiperSlide>
        <SwiperSlide className='zoom'><img src="https://miniso.pk/cdn/shop/files/Untitled-17_300x.png?v=1684827976" alt="" /></SwiperSlide>
        <SwiperSlide className='zoom'><img src="" alt="" /></SwiperSlide>
      </Swiper>
      </div>

  )
}

export default Onehomecard