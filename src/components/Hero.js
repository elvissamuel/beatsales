import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Hero.scss";
import SubSection from "./SubSection";
import { CartContext } from "./CartContextProvider";
import data from "../data.json";

function Hero() {
  const {closeCart} = useContext(CartContext)
  return (
    <div className="Hero">
      <div className="heroContainer">
        {/* <div className="heroBg">
          <img src={image_header} alt="headphone" />
        </div> */}

        <div className="heroBody">
          <h4 className="bodyTitle">New Product</h4>
          <h2 className="bodyHeader">XX99 MARK || HEADPHONES</h2>
          <span className="bodyContent">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </span>
          <Link to="/4">
            <Button name="See Product" style="primaryButton" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
