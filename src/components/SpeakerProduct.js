import React from "react";
import { Link } from "react-router-dom";
import speaker from "../imgs/home/mobile/image-speaker-zx9.png";
import speaker2 from "../imgs/home/tablet/image-speaker-zx9.png";
import speaker3 from "../imgs/home/desktop/image-speaker-zx9.png";
import earphone from "../imgs/home/mobile/image-earphones-yx1.jpg";
import earphone2 from "../imgs/home/tablet/image-earphones-yx1.jpg";
import earphone3 from "../imgs/home/desktop/image-earphones-yx1.jpg";
import Button from "./Button";
import "./SpeakerProduct.scss";

function SpeakerProduct() {

  const bgImgUrlS = "url(../imgs/home/mobile/image-speaker-zx7.jpg)";
  const bgImgUrlM = "url(../imgs/home/tablet/image-speaker-zx7.jpg)";
  const bgImgUrlL = "url(../imgs/home/desktop/image-speaker-zx7.jpg)";
  return (
    <div className="SpeakerProduct">
      <div className="speaker_product_container1">
        <div className="speaker_product_img">
          <img src={window.innerWidth < 768 ? speaker : window.innerWidth > 1100 ? speaker3 : speaker2} alt="" />
        </div>
        <div class="body1">
          <h2 className="speaker_product_name">ZX9 SPEAKER</h2>
          <span>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </span>
          <Link to="/6">
            <Button name="SEE PRODUCT" style="tetiaryButton" />
          </Link>
        </div>
      </div>

      <div className="speaker_product_container2">
        <h2>ZX7 SPEAKER</h2>
        <Link to="/5">
          <Button name="SEE PRODUCT" style="secondaryButton" />
        </Link>
      </div>

      <div className="container34">
        <div className="speaker_product_container3">
          <div className="earphone_img">
            <img src={window.innerWidth < 768 ? earphone : window.innerWidth > 1100 ? earphone3 : earphone2} alt="" />
          </div>
        </div>
        <div className="speaker_product_container4">
          <div className="container4">
            <h2>YX1 EARPHONES</h2>
            <Link to="/1">
              <Button name="SEE PRODUCT" style="secondaryButton" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeakerProduct;
