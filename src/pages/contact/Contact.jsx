import { Button } from "@mui/material";
import React, { memo, useState } from "react";
import { NavLink } from "react-router-dom";
const Contact = () => {
  window.scrollTo(0, 0);

  const bot__token = "7202579134:AAH-B6pvkVTgPiJKDzrnpXoZmRInnh78Vpc";
  // Get updates: https://api.telegram.org/bot7202579134:AAH-B6pvkVTgPiJKDzrnpXoZmRInnh78Vpc/getUpdates
  const chat_id = "-4258419307";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    console.log(name, email, message);
    let text = "<h2>Xabar</h2> %0A%0A";
    text += `Name:<b>${name}</b> %0A`;
    text += `Email: ${email} %0A`;
    text += `Message: ${message}`;
    let url = ` https://api.telegram.org/bot${bot__token}/sendMessage?chat_id=${chat_id}&text=${text}&parse_mode=html`;
    let api = new XMLHttpRequest();
    api.open("Get", url, true);
    api.send();
  };
  return (
    <div className="about contact">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__wrapper__title">
            <h2>CONTACT</h2>
            <span></span>
            <p>
              Contact me by filling out the form below and I will respond as
              soon as possible
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
