import { Button } from "@mui/material";
import React, { memo, useState } from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  window.scrollTo(0, 0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };
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
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your Name"
                  className="form__input"
                  type="text"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter Your Email"
                  className="form__input"
                  type="text"
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Enter Your Messaage"
                  className="form__placeholder"
                  name=""
                  id=""
                ></textarea>
              </div>
              <div className="form__btn">
                <Button
                  onClick={handleSend}
                  className="contact__btn"
                  variant="contained"
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Contact);
