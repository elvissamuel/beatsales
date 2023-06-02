import React from "react";
import Earphone from "../Earphone";
import headphone from "../../imgs/shared/desktop/image-category-thumbnail-headphones.png";
import speaker from "../../imgs/shared/desktop/image-category-thumbnail-speakers.png";
import earphone from "../../imgs/shared/desktop/image-category-thumbnail-earphones.png";

import SubSection from "../SubSection";
import Footer from "../Footer";
import AudioGearAd from "../AudioGearAd";

function Earphones() {
  return (
    <div className="Earphones">
      <Earphone />
      <div class="productCat">
        <SubSection
          productImg={headphone}
          productName="HEADPHONES"
          link="/headphones"
        />
        <SubSection
          productImg={speaker}
          productName="SPEAKERS"
          link="/speakers"
        />
        <SubSection
          productImg={earphone}
          productName="EARPHONES"
          link="/earphones"
        />
      </div>
      <AudioGearAd />
      <Footer />
    </div>
  );
}

export default Earphones;
