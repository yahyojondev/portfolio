import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoimages from "../../assets/images/logorasm.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [see, setSee] = useState(false);
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
          {see ? (
            <button
              className="navbar__btn"
              value={see}
              onClick={(e) => setSee((p) => !p)}
            >
              <IoClose />
            </button>
          ) : (
            <button
              value={see}
              onClick={(e) => setSee((p) => !p)}
              className="navbar__btn"
            >
              <RxHamburgerMenu />
            </button>
          )}
        </div>
      </div>
      {see ? (
        <ul className="absolute__list">
          <a href="/">
            <li>Home</li> <hr />
          </a>
          <a href="/contact ">
            <li>Contact</li> <hr />
          </a>
          <a href="/project">
            <li>Project</li> <hr />
          </a>
          <a href="/about">
            <li>About</li> <hr />
          </a>
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
