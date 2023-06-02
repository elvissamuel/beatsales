import React, { useContext, useEffect, useState } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Headphone1.scss";
import { CartContext } from "./CartContextProvider";
import Footer from "./Footer";
import AudioGearAd from "./AudioGearAd";
import SubSection from "./SubSection";
import SubProduct from "./SubProduct";
import headphone from "../imgs/shared/desktop/image-category-thumbnail-headphones.png";
import speaker from "../imgs/shared/desktop/image-category-thumbnail-speakers.png";
import earphone from "../imgs/shared/desktop/image-category-thumbnail-earphones.png";
import imgz from "./assets/product-xx59-headphones/mobile/image-product.jpg";
// import myimg from "./assets/product-yx1-earphones/mobile/image-product.jpg";
// import myImg from "../../../public/images/headphone_home.png"

function Headphone1({ product }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const prevPage = () => {
    window.history.back(); // Go back to the previous page
  };

  const { cartItems, addToCart, inputValue, handleInput, addToTCart } =
    useContext(CartContext);
  const myId = product.id;
  // console.log("product:", product.image.mobile);
  const proImg = product.image.mobile;

  return (
    <div className="Headphone1">
      <div className="headphone1_container">
        {/* <button onclick={prevPage} className="goBack_btn">Go Back</button> */}

        <div className="product">
          <div className="product_img">
            <img src={window.innerWidth < 768 ? product.image.mobile : window.innerWidth > 1100 ? product.image.desktop : product.image.tablet} alt="" />
          </div>

          <div className="product_details">
            <span>NEW PRODUCT</span>
            <h2> {product.name}</h2>
            <p>
              {product.description}
              {/* The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound. */}
            </p>

            <div className="product_cart">
              <span className="price">${product.price}</span>
              <div className="product_cart_btn">
                <input type="text" value={inputValue} onChange={handleInput} />
                <Button
                  key={product.id}
                  name="ADD TO CART"
                  style="primaryButton"
                  onclick={() => addToTCart(product, inputValue)}
                />
              </div>
              <p>{/* No of {product.name} selected: {cartItems[myId]} */}</p>
            </div>
          </div>
        </div>

        <div className="product_feature">
          <div class="prodFeat">
            <h2>FEATURES</h2>
            <p>{product.features}</p>
          </div>

          <div className="inTheBox">
            <h2 className="boxTitle">IN THE BOX</h2>
            <table>
              <tr>
                <td className="td1">{product.includes[0].quantity}x</td>
                <td>{product.includes[0].item}</td>
              </tr>
              <tr>
                <td className="td1">{product.includes[1].quantity}x</td>
                <td>{product.includes[1].item}</td>
              </tr>
              <tr>
                <td className="td1">{product.includes[2].quantity}x</td>
                <td>{product.includes[2].item}</td>
              </tr>
              <tr>
                <td className="td1">{product.includes[3].quantity}x</td>
                <td>{product.includes[3].item}</td>
              </tr>
              {product.includes.length > 4 && (
                <tr>
                  <td className="td1">{product.includes[4].quantity}x</td>
                  <td>{product.includes[4].item}</td>
                </tr>
              )}
            </table>
          </div>
        </div>

        <div className="product_image_sample">
          <div className="img_1_2">
            <div className="img1">
              <img src={product.gallery.first.mobile} alt="" />
            </div>
            <div className="img2">
              <img src={product.gallery.second.mobile} alt="" />
            </div>
          </div>
          <div className="img3">
            <img src={product.gallery.third.mobile} alt="" />
          </div>
        </div>

        <div className="alsoLike">
          <h2>YOU MAY ALSO LIKE</h2>
        </div>
        <div className="subProduct">
          <SubProduct
            image={window.innerWidth < 768 ? product.others[0].image.mobile : window.innerWidth > 1100 ? product.others[0].image.desktop : product.others[0].image.tablet }
            productName={product.others[0].name} page={`/${product.id }`}
          />
          <SubProduct
            image={window.innerWidth < 768 ? product.others[1].image.mobile : window.innerWidth > 1100 ? product.others[1].image.desktop : product.others[1].image.tablet}
            productName={product.others[1].name} page={`/${product.id}`}
          />
          <SubProduct
            image={window.innerWidth < 768 ? product.others[2].image.mobile : window.innerWidth > 1100 ? product.others[2].image.desktop : product.others[2].image.tablet}
            productName={product.others[2].name} page={`/${product.id}`}
          />
        </div>
        <div className="subSection">
          <SubSection productImg={headphone} productName="HEADPHONES" link="/headphones" />
          <SubSection productImg={speaker} productName="SPEAKERS" link="/speakers" />
          <SubSection productImg={earphone} productName="EARPHONES" link="/earphones" />
        </div>
        <AudioGearAd />
        <Footer />
      </div>
    </div>
  );
}

export default Headphone1;
