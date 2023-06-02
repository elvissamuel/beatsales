import React from "react";
import { Link } from "react-router-dom";
import speaker1 from "../../imgs/product-zx7-speaker/mobile/image-product.jpg";
import productImg1 from "../../imgs/product-zx7-speaker/mobile/image-gallery-1.jpg";
import productImg2 from "../../imgs/product-zx7-speaker/mobile/image-gallery-2.jpg";
import productImg3 from "../../imgs/product-zx7-speaker/mobile/image-gallery-3.jpg";
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

function Speaker1() {
  return (
    <div className="Speaker1">
      <div className="headphone1_container">
        <Link className="goBack_btn">Go Back</Link>
        <div className="product">
          <div className="product_img">
            <img src={speaker1} alt="" />
          </div>

          <div className="product_details">
            <span>NEW PRODUCT</span>
            <h2>ZX7 SPEAKER</h2>
            <p>
              Stream high quality sound wirelessly with minimal to no loss. The
              ZX7 speaker uses high-end audiophile components that represents
              the top of the line powered speakers for home or studio use.
            </p>

            <div className="product_cart">
              <span className="price">$3,500</span>
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
            Reap the advantages of a flat diaphragm tweeter cone. This provides
            a fast response rate and excellent high frequencies that lower
            tiered bookshelf speakers cannot provide. The woofers are made from
            aluminum that produces a unique and clear sound. XLR inputs allow
            you to connect to a mixer for more advanced usage.
          </p>
          <p>
            The ZX7 speaker is the perfect blend of stylish design and high
            performance. It houses an encased MDF wooden enclosure which
            minimises acoustic resonance. Dual connectivity allows pairing
            through bluetooth or traditional optical and RCA input. Switch input
            sources and control volume at your finger tips with the included
            wireless remote. This versatile speaker is equipped to deliver an
            authentic listening experience.
          </p>

          <table>
            <tr>
              <td className="td1">1x</td>
              <td>Speaker Unit</td>
            </tr>
            <tr>
              <td className="td1">2x</td>
              <td>Speaker Cloth Panel</td>
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
              <td>7.5mm Optical Cable</td>
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

export default Speaker1;
