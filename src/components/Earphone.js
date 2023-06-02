import React from "react";
import data from "../data.json";
import { Link } from "react-router-dom";
import "./Earphone.scss";
// import earphone from "../imgs/product-yx1-earphones/mobile/image-category-page-preview.jpg";
import Button from "./Button";

function Earphone() {
  window.scrollTo(0, 0);

  return (
    <div className="Earphone">
      <div className="earphone_container">
        <div className="earphone_header">
          <h2>EARPHONES</h2>
        </div>

        {data.map((item) => {
          if (item.category === "earphones") {
            return (
              <div className="product" key={item.id}>
                <div className="product_img">
                  <img src={window.innerWidth < 768 ? item.categoryImage.mobile : item.categoryImage.tablet} alt="" />
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
      </div>
    </div>
  );
}

export default Earphone;
