import { Button } from "@mui/material";
import React, { memo } from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  window.scrollTo(0, 0);
  return (
    <div className="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__wrapper__title">
            <h2>ABOUT ME</h2>
            <span></span>
            <p>
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </p>
          </div>
          <div className="about__wrapper__content">
            <div className="about__content__left">
              <h3>Get to know me!</h3>
              <div className="text__wrapper">
                <p>
                  I'm a Frontend Focused Web Developer building and managing the
                  Front-end of Websites and Web Applications that leads to the
                  success of the overall product. Check out some of my work in
                  the Projects section.
                </p>
                <p>
                  I also like sharing content related to the stuff that I have
                  learned over the years in Web Development so it can help other
                  people of the Dev Community. Feel free to Connect or Follow me
                  on my Linkedin and Instagram where I post useful content
                  related to Web Development and Programming
                </p>
                <p>
                  I'm open to Job opportunities where I can contribute, learn
                  and grow. If you have a good opportunity that matches my
                  skills and experience then don't hesitate to contact me.
                </p>
              </div>
              <NavLink to={"/project"} className="about__btn">
                <Button className="about__btn" variant="contained">
                  Project
                </Button>
              </NavLink>
            </div>
            <div className="about__content__right">
              <h3>My Skills</h3>
              <ul className="skills__list">
                <li className="skills__item">Html</li>
                <li className="skills__item">Css</li>
                <li className="skills__item">Javascript</li>
                <li className="skills__item">Sass</li>
                <li className="skills__item">Bootstrap</li>
                <li className="skills__item">tailwind</li>
                <li className="skills__item">React</li>
                <li className="skills__item">redux</li>
                <li className="skills__item">Next.js</li>
                <li className="skills__item">Typescript</li>
                <li className="skills__item">MUi</li>
                <li className="skills__item">Ant Design</li>
                <li className="skills__item">Chakra Ui</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(About);
