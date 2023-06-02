import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/audiophile2.svg"
import facebook from "../imgs/shared/desktop/icon-facebook.svg";
import instagram from "../imgs/shared/desktop/icon-instagram.svg";
import twitter from "../imgs/shared/desktop/icon-twitter.svg";
import "./Footer.scss";

function Footer() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMenu = () => {
    setClick(false);
  };

  return (
    <div className="Footer">
      <div className="footer_container">
        <div className="footer_logo">
          <img src={logo} alt="" />
        </div>

        <ul className="footer_menu">
          <li>
            <Link to="/" className="menu-link" onClick={closeMenu}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/headphones" className="menu-link" onClick={closeMenu}>
              HEADPHONES
            </Link>
          </li>
          <li>
            <Link to="/speakers" className="menu-link" onClick={closeMenu}>
              SPEAKERS
            </Link>
          </li>
          <li>
            <Link to="/earphones" className="menu-link" onClick={closeMenu}>
              EARPHONES
            </Link>
          </li>
        </ul>

        <div className="footer_about">
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
        </div>

        <h5>Copyright 2023. All Rights Reserved</h5>

        <div className="footer_social_icon">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
