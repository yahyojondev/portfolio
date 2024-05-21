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
        <img src={telegramlogo} alt="" />
        <img src={githublogo} alt="" />
        <img src={linkedinlogo} alt="" />
        <img src={twitterlogo} alt="" />
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
