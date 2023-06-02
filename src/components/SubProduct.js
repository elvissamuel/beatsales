import React from "react";
import "./SubProduct.scss";
import Button from "./Button";
import { Link } from "react-router-dom";

function SubProduct({ image, productName, page }) {
  return (
    <div className="SubProduct">
      <div className="subproduct_container">
        <div className="subproduct_img">
          <img src={image} alt="" />
        </div>
        <h2>{productName}</h2>
        <Link to={page}>
          <Button name="SEE PRODUCT" style="primaryButton" />
        </Link>
      </div>
    </div>
  );
}

export default SubProduct;
