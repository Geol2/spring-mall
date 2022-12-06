import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './MainBanner.css';

export default () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            <SwiperSlide>
                <img className="main-banner" src={`${process.env.PUBLIC_URL}/images/mainBanner-1.jpg`} alt="noimg" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="main-banner" src={`${process.env.PUBLIC_URL}/images/mainBanner-2.jpg`} alt="noimg" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="main-banner" src={`${process.env.PUBLIC_URL}/images/mainBanner-3.jpg`} alt="noimg" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="main-banner" src={`${process.env.PUBLIC_URL}/images/mainBanner-4.jpg`} alt="noimg" />
            </SwiperSlide>
        </Swiper>
    )
};