import React, { memo } from "react";
import footerlogo from "../../assets/images/logorasm.jpg";
import gitlogo from "../../assets/images/whitegithub.jpg";
import telelogo from "../../assets/images/whitetelegram.jpg";
import linkedinlogo from "../../assets/images/whitelinkedin.png";
import twitterlogo from "../../assets/images/whitetwitter.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__wrapper__top">
            <div className="footer__top__left">
              <img src={footerlogo} alt="" />
              <p>
                A Frontend focused Web Developer building the Frontend of
                Websites and Web Applications that leads to the success of the
                overall product
              </p>
            </div>
            <div className="footer__top__right">
              <h3>SOCIAL</h3>
              <div className="img__wrapper">
                <img src={gitlogo} alt="" />
                <img src={linkedinlogo} alt="" />
                <img src={twitterlogo} alt="" />
                <img src={telelogo} alt="" />
              </div>
            </div>
          </div>
          <hr />
          <div className="footer__wrraper__bottom">
            <span>© Copyright 2024 . Made by </span>
            <p> NABIJONOV YAHYOJON</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
