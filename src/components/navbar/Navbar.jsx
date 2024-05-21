import React from "react";
import { NavLink } from "react-router-dom";
import logoimages from "../../assets/images/logorasm.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__wrapper">
          <NavLink to={"/"}>
            <img src={logoimages} alt="" />
          </NavLink>
          <ul className="navbar__list">
            <li className="navbar__list__item">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="navbar__list__item">
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li className="navbar__list__item">
              <NavLink to={"/project"}>Project</NavLink>
            </li>
            <li className="navbar__list__item">
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
