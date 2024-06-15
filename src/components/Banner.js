import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Banner = () => {
  return (
    <div className="banner-swiper">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        slidesPerView={1}
      >
        <SwiperSlide className="slide1">Slide 1</SwiperSlide>
        <SwiperSlide className="slide2">Slide 2</SwiperSlide>
        <SwiperSlide className="slide3">Slide 3</SwiperSlide>
        <SwiperSlide className="slide4">Slide 4</SwiperSlide>
        <SwiperSlide className="slide5">Slide 5</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
