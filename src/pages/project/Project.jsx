import { Button } from "@mui/material";
import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import projectimg from "../../assets/images/project1.jpg";
import projectimg2 from "../../assets/images/project2.jpg";
import projectimg3 from "../../assets/images/project3.jpg";
import projectimg4 from "../../assets/images/project4.jpg";
import projectimg5 from "../../assets/images/project5.jpg";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";

const Project = () => {
  window.scrollTo(0, 0);
  return (
    <div className="about project project__wrapper">
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
        </div>
      </div>
      <div className="container">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="swipper__wrapper"
        >
          <SwiperSlide className="img__wrapper">
            <img src={projectimg} alt="" />
            <a
              target="_blank"
              href="https://exam-reactjs-react-redux-7moths.vercel.app/"
            >
              View project
            </a>
          </SwiperSlide>
          <SwiperSlide className="img__wrapper">
            <img src={projectimg2} alt="" />
            <a target="_blank" href="https://real-project-two.vercel.app/">
              View project
            </a>
          </SwiperSlide>
          <SwiperSlide className="img__wrapper">
            <img src={projectimg3} alt="" />
            <a target="_blank" href="https://reactteam-react-js.vercel.app/">
              View project
            </a>
          </SwiperSlide>
          <SwiperSlide className="img__wrapper">
            <img src={projectimg4} alt="" />
            <a target="_blank" href="https://reactteam-react-js.vercel.app/">
              View project
            </a>
          </SwiperSlide>
          <SwiperSlide className="img__wrapper">
            <img src={projectimg5} alt="" />
            <a target="_blank" href="https://exam-2-1-n41-lesson24.vercel.app/">
              View project
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default memo(Project);
