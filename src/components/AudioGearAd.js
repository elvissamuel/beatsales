import React from "react";
import "./AudioGearAd.scss";
import elon from "../imgs/shared/mobile/image-best-gear.jpg";
import elon_mid from "../imgs/shared/tablet/image-best-gear.jpg";
import elon_lg from "../imgs/shared/desktop/image-best-gear.jpg";


function AudioGearAd() {
  return (
    <div className="AudioGearAd">
      <div className="container5">
        <div className="container5_img">
          <img src={window.innerWidth < 768 ? elon : window.innerWidth > 1100 ? elon_lg : elon_mid} alt="" />
        </div>
        <div class="body5">
          <h2>
            Bringing you the <span>best</span> audio gear
          </h2>
          <p>
            Located at the heart of New York City, Audiophile is the premier store
            for high end headphones, earphones, speakers, and audio accessories.
            We have a large showroom and luxury demonstration rooms available for
            you to browse and experience a wide range of our products. Stop by our
            store to meet some of the fantastic people who make Audiophile the
            best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AudioGearAd;
