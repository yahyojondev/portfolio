import { Button } from "@mui/material";
import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import projectimg from "../../assets/images/project1.jpg";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";

const Project = () => {
  window.scrollTo(0, 0);
  return (
    <div className="about project">
      <div className="container">
        <div className="about__wrapper project__wrapper">
          <div className="about__wrapper__title">
            <h2>PROJECTS</h2>
            <span></span>
            <p>
              Here you will find some of the personal and clients projects that
              I created with each project containing its own case study
            </p>
          </div>
          <div className="container">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 100000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={projectimg} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={projectimg} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={projectimg} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={projectimg} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={projectimg} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={projectimg} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Project);
