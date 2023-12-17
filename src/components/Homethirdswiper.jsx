
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination,Navigation} from 'swiper/modules';

const Homethirdswiper = () => {
  return (
    <Swiper
        slidesPerView={5}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination,Navigation]}
        className="mySwiper swiper3"
      >
        <SwiperSlide className='thirdswiper d-flex flex-column justify-content-center '><img src="https://miniso.pk/cdn/shop/products/6931798874730-1_360x.jpg?v=1681529073" alt="" />
        <div className=' px-4 fw-bold '>
            Toy Story Collection LED <br />Night Light (Lotso) Model: <br /> <p className='px-5 fw-bold'>ALD-DB33</p>
            <p className='px-5 text-warning'>Rs.2,100</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='thirdswiper'><img src="https://miniso.pk/cdn/shop/products/2021030391258406-1_360x.jpg?v=1669110392" alt="" className='mt-3' />
        <div className=' px-4 fw-bold'>
            Toy Story Collection LED <br />Night Light (Lotso) Model: <br /> <p className='px-5 fw-bold'>ALD-DB33</p>
            <p className='px-5 text-warning'>Rs.2,100</p>
            </div>
            </SwiperSlide>
        <SwiperSlide className='thirdswiper'><img src="https://miniso.pk/cdn/shop/files/24kcheekpalette_800x_8e36e193-82ed-40e4-86d0-fadbdcf696f8_360x.webp?v=1690454809" alt="" className='mt-3'/>
        <div className=' px-4 fw-bold'>
            Toy Story Collection LED <br />Night Light (Lotso) Model: <br /> <p className='px-5 fw-bold'>ALD-DB33</p>
            <p className='px-5 text-warning'>Rs.2,100</p>
            </div>
            </SwiperSlide>
        <SwiperSlide className='thirdswiper'><img src="https://miniso.pk/cdn/shop/files/5_1c98b536-2e4a-4aee-8649-0bbcc42e42bd_360x.png?v=1691134559" alt="" className='mt-3'/>
        <div className=' px-4 fw-bold'>
            Toy Story Collection LED <br />Night Light (Lotso) Model: <br /> <p className='px-5 fw-bold'>ALD-DB33</p>
            <p className='px-5 text-warning'>Rs.2,100</p>
            </div></SwiperSlide>
        <SwiperSlide className='thirdswiper'><img src="https://miniso.pk/cdn/shop/files/3_2223eaad-fd2e-4d2f-8fb2-0b1ccd8822b7_360x.png?v=1694426280" alt="" className='mt-3'/>
        <div className=' px-4 fw-bold'>
            Toy Story Collection LED <br />Night Light (Lotso) Model: <br /> <p className='px-5 fw-bold'>ALD-DB33</p>
            <p className='px-5 text-warning'>Rs.2,100</p>
            </div></SwiperSlide>
        <SwiperSlide className='thirdswiper'><img src="https://miniso.pk/cdn/shop/files/3_ad168ba9-5590-4a30-a19c-d5ecbe644dd6_360x.jpg?v=1694773193" alt="" className='mt-3'/>
        <div className=' px-4 fw-bold'>
            Toy Story Collection LED <br />Night Light (Lotso) Model: <br /> <p className='px-5 fw-bold'>ALD-DB33</p>
            <p className='px-5 text-warning'>Rs.2,100</p>
            </div></SwiperSlide>
        <SwiperSlide className='thirdswiper'><img src="https://miniso.pk/cdn/shop/products/35_90108699-9819-4f8f-a448-35fd235d9a5d_360x.jpg?v=1698822020" alt="" className='mt-3'/>
        <div className=' px-4 fw-bold'>
            Toy Story Collection LED <br />Night Light (Lotso) Model: <br /> <p className='px-5 fw-bold'>ALD-DB33</p>
            <p className='px-5 text-warning'>Rs.2,100</p>
            </div></SwiperSlide>
        <SwiperSlide className='thirdswiper'><img src="https://miniso.pk/cdn/shop/files/4518903140311-1_360x.jpg?v=1692698778" alt="" className='mt-3'/>
        <div className=' px-4 fw-bold'>
            Toy Story Collection LED <br />Night Light (Lotso) Model: <br /> <p className='px-5 fw-bold'>ALD-DB33</p>
            <p className='px-5 text-warning'>Rs.2,100</p>
            </div></SwiperSlide>
        <SwiperSlide className='thirdswiper'><img src="https://miniso.pk/cdn/shop/files/69317988509566941501584399_360x.jpg?v=1695038889" alt="" className='mt-3'/>
        <div className=' px-4 fw-bold'>
            Toy Story Collection LED <br />Night Light (Lotso) Model: <br /> <p className='px-5 fw-bold'>ALD-DB33</p>
            <p className='px-5 text-warning'>Rs.2,100</p>
            </div></SwiperSlide>
      </Swiper>
     
      
  )
}

export default Homethirdswiper