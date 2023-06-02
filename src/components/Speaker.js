import React from "react";
import data from "../data.json";
import { Link } from "react-router-dom";
import "./Speaker.scss";
import speaker1 from "../imgs/shared/desktop/image-zx9-speaker.jpg";
import speaker2 from "../imgs/shared/desktop/image-zx7-speaker.jpg";
import Button from "./Button";

function Speaker() {
  window.scrollTo(0, 0);

  return (
    <div className="Speaker">
      <div className="speaker_container">
        <div className="speaker_header">
          <h2>SPEAKERS</h2>
        </div>

        {data.map((item) => {
          if (item.category === "speakers") {
            return (
              <div className={`product ${item.id % 2 === 0 && 'reverse'}`} key={item.id}>
                <div className="product_img">
                  <img src={window.innerWidth < 768 ? item.categoryImage.mobile : window.innerWidth > 1100 ? item.categoryImage.desktop : item.categoryImage.tablet} alt={item.slug} />
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

export default Speaker;
