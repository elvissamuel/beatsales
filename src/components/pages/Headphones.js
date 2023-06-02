import React from "react";
import HeadphoneProducts from "../HeadphoneProducts";
import headphone from "../../imgs/shared/desktop/image-category-thumbnail-headphones.png";
import speaker from "../../imgs/shared/desktop/image-category-thumbnail-speakers.png";
import earphone from "../../imgs/shared/desktop/image-category-thumbnail-earphones.png";

import SubSection from "../SubSection";
import Footer from "../Footer";
import AudioGearAd from "../AudioGearAd";

function Headphones() {
  return (
    <div className="Headphones">
      <HeadphoneProducts />
      <div class="productCat">
        <SubSection productImg={headphone} productName="HEADPHONES" />
        <SubSection productImg={speaker} productName="SPEAKERS" />
        <SubSection productImg={earphone} productName="EARPHONES" />
      </div>
      <AudioGearAd />
      <Footer />
    </div>
  );
}

export default Headphones;
