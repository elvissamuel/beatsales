import React from "react";
import { Link } from "react-router-dom";
import headphone3 from "../../imgs/product-xx59-headphones/mobile/image-product.jpg";
import productImg1 from "../../imgs/product-xx59-headphones/mobile/image-gallery-1.jpg";
import productImg2 from "../../imgs/product-xx59-headphones/mobile/image-gallery-2.jpg";
import productImg3 from "../../imgs/product-xx59-headphones/mobile/image-gallery-3.jpg";
import product1 from "../../imgs/shared/mobile/image-xx99-mark-two-headphones.jpg";
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

function Headphone3() {
  return (
    <div className="Headphone3">
      <div className="headphone1_container">
        <Link className="goBack_btn">Go Back</Link>
        <div className="product">
          <div className="product_img">
            <img src={headphone3} alt="" />
          </div>

          <div className="product_details">
            <span>NEW PRODUCT</span>
            <h2>XX59 Headphones</h2>
            <p>
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </p>

            <div className="product_cart">
              <span className="price">$899</span>
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
            These headphones have been created from durable, high-quality
            materials tough enough to take anywhere. Its compact folding design
            fuses comfort and minimalist style making it perfect for travel.
            Flawless transmission is assured by the latest wireless technology
            engineered for audio synchronization with videos.
          </p>
          <p>
            More than a simple pair of headphones, this headset features a pair
            of built-in microphones for clear, hands-free calling when paired
            with a compatible smartphone. Controlling music and calls is also
            intuitive thanks to easy-access touch buttons on the earcups.
            Regardless of how you use the XX59 headphones, you can do so all day
            thanks to an impressive 30-hour battery life that can be rapidly
            recharged via USB-C.
          </p>

          <table>
            <tr>
              <td className="td1">1x</td>
              <td>Headphone Unit</td>
            </tr>
            <tr>
              <td className="td1">2x</td>
              <td>Replacement Earcups</td>
            </tr>
            <tr>
              <td className="td1">1x</td>
              <td>User Manual</td>
            </tr>
            <tr>
              <td className="td1">1x</td>
              <td>3.5mm 5m Audio Cable</td>
            </tr>
            <tr>
              <td className="td1">1x</td>
              <td>Travel Bag</td>
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

export default Headphone3;
