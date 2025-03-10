import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../../src/assets/home/slide1.jpg";
import slide2 from "../../../../src/assets/home/slide2.jpg";
import slide3 from "../../../../src/assets/home/slide3.jpg";
import slide4 from "../../../../src/assets/home/slide4.jpg";
import slide5 from "../../../../src/assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <>
      <section>
        <SectionTitle
          subHeading={'from 11:00am to 11:00pm'}
          heading = {"Order Online"}>
        </SectionTitle>
        <Swiper
          slidesPerView={"4"}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-24"
        >
          <SwiperSlide className="">
            <img src={slide1} />
            <h3 className="text-center text-white uppercase text-4xl -mt-16">
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} />
            <h3 className="text-center text-white uppercase text-4xl -mt-16">
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} />
            <h3 className="text-center text-white uppercase text-4xl -mt-16">
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} />
            <h3 className="text-center text-white uppercase text-4xl -mt-16">
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} />
            <h3 className="text-center text-white uppercase text-4xl -mt-16">
              Salads
            </h3>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Category;
