import React from "react";
import { Link } from "react-router-dom";
import rightArrow from "../imgs/shared/desktop/icon-arrow-right.svg";
import "./SubSection.scss";

function SubSection({ productImg, productName, link }) {
  return (
    <div className="SubSection">
      <div className="subsection_container">
        <div className="subsection_img">
          <img src={productImg} alt="" />
        </div>
        <div className="subsection_card">
          <div className="subsection_card_body">
            <h3>{productName}</h3>
            <Link to={link}>
              <span>
                Shop <i class="fas fa-angle-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubSection;
