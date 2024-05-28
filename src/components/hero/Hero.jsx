import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import telegramlogo from "../../assets/images/telegram.svg";
import githublogo from "../../assets/images/github.svg";
import linkedinlogo from "../../assets/images/linkedin.svg";
import twitterlogo from "../../assets/images/twitter.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="network__wrapper">
        <a target="_blank" href="t.me/Discipline_003">
          <img src={telegramlogo} alt="" />
        </a>
        <a target="_blank" href="https://github.com/yahyojondev">
          <img src={githublogo} alt="" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/yahyobek-nabijonov-0b30232aa/"
        >
          <img
            src={linkedinlogo}
            alt="https://www.linkedin.com/in/yahyobek-nabijonov-0b30232aa/"
          />
        </a>
        <a target="_blank" href="https://x.com/yahyobek68167">
          <img src={twitterlogo} alt="" />
        </a>
      </div>
      <div className="container">
        <div className="hero__wrapper">
          <h1>HEY, I'M NABIJONOV YAHYOJON</h1>
          <p>
            A Result-Oriented Web Developer building and managing Websites and
            Web Applications that leads to the success of the overall product
          </p>
          <NavLink className="hero__btn" to={"/projects"}>
            <Button className="hero__btn" variant="contained">
              Projects
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
