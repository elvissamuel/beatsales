import React from "react";
import data from "../../data.json";
import { Link } from "react-router-dom";
import earphone1 from "../../imgs/product-yx1-earphones/mobile/image-product.jpg";
import productImg1 from "../../imgs/product-yx1-earphones/mobile/image-gallery-1.jpg";
import productImg2 from "../../imgs/product-yx1-earphones/mobile/image-gallery-2.jpg";
import productImg3 from "../../imgs/product-yx1-earphones/mobile/image-gallery-3.jpg";
import product1 from "../../imgs/shared/mobile/image-xx59-headphones.jpg";
import product2 from "../../imgs/shared/mobile/image-xx99-mark-one-headphones.jpg";
import product3 from "../../imgs/shared/mobile/image-zx9-speaker.jpg";
import headphone from "../../imgs/shared/desktop/image-category-thumbnail-headphones.png";
import speaker from "../../imgs/shared/desktop/image-category-thumbnail-speakers.png";
import earphone from "../../imgs/shared/desktop/image-category-thumbnail-earphones.png";

import Button from "../Button";
// import "./Headphone1.scss";
import SubProduct from "../SubProduct";
import SubSection from "../SubSection";
import AudioGearAd from "../AudioGearAd";
import Footer from "../Footer";

function Earphone1() {
  return (
    <div className="Earphone1">
      <div className="headphone1_container">
        <Link className="goBack_btn">Go Back</Link>
        <div className="product">
          <div className="product_img">
            <img src={earphone1} alt="" />
          </div>

          <div className="product_details">
            <span>NEW PRODUCT</span>
            <h2>YX1 WIRELESS EARPHONES</h2>
            <p>
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>

            <div className="product_cart">
              <span className="price">$599</span>
              <div className="product_cart_btn">
                <input type="text" />
                <Button name="ADD TO CART" style="primaryButton" />
              </div>
            </div>
          </div>
        </div>

        <div className="product_feature">
          <h2>FEATURES</h2>
          <p>
            Experience unrivalled stereo sound thanks to innovative acoustic
            technology. With improved ergonomics designed for full day wearing,
            these revolutionary earphones have been finely crafted to provide
            you with the perfect fit, delivering complete comfort all day long
            while enjoying exceptional noise isolation and truly immersive
            sound.
          </p>
          <p>
            The YX1 Wireless Earphones features customizable controls for
            volume, music, calls, and voice assistants built into both earbuds.
            The new 7-hour battery life can be extended up to 28 hours with the
            charging case, giving you uninterrupted play time. Exquisite
            craftsmanship with a splash resistant design now available in an all
            new white and grey color scheme as well as the popular classic
            black.
          </p>

          <table>
            <tr>
              <td className="td1">1x</td>
              <td>Earphone Unit</td>
            </tr>
            <tr>
              <td className="td1">2x</td>
              <td>Multi-size Earplugs</td>
            </tr>
            <tr>
              <td className="td1">1x</td>
              <td>User Manual</td>
            </tr>
            <tr>
              <td className="td1">1x</td>
              <td>USB-C Charging Cable</td>
            </tr>
            <tr>
              <td className="td1">1x</td>
              <td>Travel Pouch</td>
            </tr>
          </table>
        </div>

        <div className="product_image_sample">
          <div className="img1">
            <img src={productImg1} alt="" />
          </div>
          <div className="img2">
            <img src={productImg2} alt="" />
          </div>
          <div className="img3">
            <img src={productImg3} alt="" />
          </div>
        </div>

        <div className="alsoLike">
          <h2>YOU MAY ALSO LIKE</h2>
        </div>
        <SubProduct image={product1} productName="XX99 MARK II" />
        <SubProduct image={product2} productName="XX59" />
        <SubProduct image={product3} productName="ZX9 SPEAKER" />
        <SubSection productImg={headphone} productName="HEADPHONES" />
        <SubSection productImg={speaker} productName="SPEAKERS" />
        <SubSection productImg={earphone} productName="EARPHONES" />
        <AudioGearAd />
        <Footer />
      </div>
    </div>
  );
}

export default Earphone1;
