import React, { useContext } from "react";
import "./Home.scss"
import data from "../../data.json";
import Hero from "../Hero";
import headphone from "../../imgs/shared/desktop/image-category-thumbnail-headphones.png";
import speaker from "../../imgs/shared/desktop/image-category-thumbnail-speakers.png";
import earphone from "../../imgs/shared/desktop/image-category-thumbnail-earphones.png";

import SubSection from "../SubSection";
import SpeakerProduct from "../SpeakerProduct";
import Footer from "../Footer";
import AudioGearAd from "../AudioGearAd";
import Headphone1 from "../Headphone1";
import Headphone3 from "./Headphone3";
import Speaker1 from "./Speaker1";
import Earphone1 from "./Earphone1";
import Speaker2 from "./Speaker2";
import Checkout from "./Checkout";
import { CartContext } from "../CartContextProvider";

function Home() {

  const{closeCart} = useContext(CartContext)
  // console.log(data[0].slug);
  console.log(window.innerWidth);
  return (
    <div className="Home" onClick={closeCart}>
      {/* <Speaker2 /> */}
      {/* <Checkout /> */}
      <Hero />
      <div className="productCat">
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
      <SpeakerProduct />
      <AudioGearAd />
      <Footer />
    </div>
  );
}

export default Home;
