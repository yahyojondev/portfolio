import { Button } from "@mui/material";
import React, { memo } from "react";
import { NavLink } from "react-router-dom";

const Project = ({ title }) => {
  window.scrollTo(0, 0);
  return (
    <div className="about project">
      <div className="container">
        <div className="about__wrapper">
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
    </div>
  );
};

export default memo(Project);
