import { Button, TextField } from "@mui/material";
import React, { memo } from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  window.scrollTo(0, 0);
  return (
    <div className="about contact">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__wrapper__title">
            <h2>CONTACT</h2>
            <span></span>
            <p>
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </p>
          </div>
          <div className="contact__content">
            <form>
              <div className="input__wrapper">
                <TextField
                  required
                  className="form__input"
                  id="outlined-basic"
                  label="Enter Your Name"
                  variant="outlined"
                />
                <TextField
                  required
                  className="form__input"
                  id="outlined-basic"
                  label="Enter Your Email"
                  variant="outlined"
                />
                <textarea
                  required
                  placeholder="Enter Your Messaage"
                  className="form__placeholder"
                  name=""
                  id=""
                ></textarea>
              </div>
              <Button className="contact__btn" variant="contained">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Contact);
