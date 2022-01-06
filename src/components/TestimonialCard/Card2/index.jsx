import React from "react";
import LazyLoad from "react-lazyload";

import "./styles.scss";

function Card2({ image, name, company, description, extraText }) {
  return (
    <div className="card-type2-section">
      <div className="type2-head">
        <div className="type2-img-div">
          <LazyLoad once>
            <img
              src={image}
              alt={name + " " + company}
              title={name + " " + company}
            />
          </LazyLoad>
        </div>

        <div className="type2-info">
          <div className="name">{name}</div>
          <div className="company">{company}</div>
          <div className="deco-line"></div>
        </div>
      </div>

      <div className="type2-description">{description}</div>
      <div className="type2-description_bold">{extraText}</div>
    </div>
  );
}

export default Card2;
