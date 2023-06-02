import React from "react";
import { Link } from "react-router-dom";
import speaker2 from "../../imgs/product-zx9-speaker/mobile/image-product.jpg";
import productImg1 from "../../imgs/product-zx9-speaker/mobile/image-gallery-1.jpg";
import productImg2 from "../../imgs/product-zx9-speaker/mobile/image-gallery-2.jpg";
import productImg3 from "../../imgs/product-zx9-speaker/mobile/image-gallery-3.jpg";
import product1 from "../../imgs/shared/mobile/image-xx59-headphones.jpg";
import product2 from "../../imgs/shared/mobile/image-xx99-mark-one-headphones.jpg";
import product3 from "../../imgs/shared/mobile/image-zx7-speaker.jpg";
import headphone from "../../imgs/shared/desktop/image-category-thumbnail-headphones.png";
import speaker from "../../imgs/shared/desktop/image-category-thumbnail-speakers.png";
import earphone from "../../imgs/shared/desktop/image-category-thumbnail-earphones.png";

import Button from "../Button";
// import "./Headphone1.scss";
import SubProduct from "../SubProduct";
import SubSection from "../SubSection";
import AudioGearAd from "../AudioGearAd";
import Footer from "../Footer";

function Speaker2() {
  return (
    <div className="Speaker2">
      <div className="headphone1_container">
        <Link className="goBack_btn">Go Back</Link>
        <div className="product">
          <div className="product_img">
            <img src={speaker2} alt="" />
          </div>

          <div className="product_details">
            <span>NEW PRODUCT</span>
            <h2>ZX9 SPEAKER</h2>
            <p>
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
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
            Connect via Bluetooth or nearly any wired source. This speaker
            features optical, digital coaxial, USB Type-B, stereo RCA, and
            stereo XLR inputs, allowing you to have up to five wired source
            devices connected for easy switching. Improved bluetooth technology
            offers near lossless audio quality at up to 328ft (100m).
          </p>
          <p>
            Discover clear, more natural sounding highs than the competition
            with ZX9’s signature planar diaphragm tweeter. Equally important is
            its powerful room-shaking bass courtesy of a 6.5” aluminum alloy
            bass unit. You’ll be able to enjoy equal sound quality whether in a
            large room or small den. Furthermore, you will experience new
            sensations from old songs since it can respond to even the subtle
            waveforms.
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

export default Speaker2;
