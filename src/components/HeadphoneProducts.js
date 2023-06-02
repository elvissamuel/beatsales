import React from "react";
import { Link } from "react-router-dom";
import data from "../data.json";
import "./HeadphoneProducts.scss";
import headphone1 from "../imgs/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import headphone2 from "../imgs/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import headphone3 from "../imgs/product-xx59-headphones/mobile/image-product.jpg";
import Button from "./Button";

function HeadphoneProducts() {
  window.scrollTo(0, 0);

  return (
    <div className="HeadphoneProduct">
      <div className="headphone_header">
        <h2>HEADPHONES</h2>
      </div>

      {data.map((item) => {
        if (item.category === "headphones") {
          return (
            <div className={`product ${item.id % 2 !== 0 ? 'reverse' : ''}`} key={item.id} >
              <div className="product_img">
                <img src={window.innerWidth < 768 ? item.categoryImage.mobile : window.innerWidth > 1100 ? item.categoryImage.desktop : item.categoryImage.tablet} alt="" />
              </div>

              <div className="product_details">
                <span>NEW PRODUCT</span>
                <h2>{item.name}</h2>
                <p>{item.description}</p>

                <Link to={`/${item.id}`}>
                  <Button name="SEE PRODUCT" style="primaryButton" />
                </Link>
              </div>
            </div>
          );
        }
      })}

      {/* <div className="product">
        <div className="product_img">
          <img src={headphone2} alt="" />
        </div>

        <div className="product_details">
          <span>NEW PRODUCT</span>
          <h2>XX99 Mark I Headphones</h2>
          <p>
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>

          <Link to="/headphone2">
            <Button name="SEE PRODUCT" style="primaryButton" />
          </Link>
        </div>
      </div>

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

          <Link to="/headphone3">
            <Button name="SEE PRODUCT" style="primaryButton" />
          </Link>
        </div>
      </div> */}
    </div>
  );
}

export default HeadphoneProducts;
