import React from "react";
import LazyLoad from "react-lazyload";

import "./styles.scss";

const Card3 = (props) => {
  const { name, imgURL, designation, description } = props.info;
  return (
    <div className="card-type3-section">
      <div className="type3-img-div">
        <LazyLoad>
          <img
            src={imgURL}
            alt={name + "" + designation}
            title={name + "" + designation}
          />
        </LazyLoad>
      </div>

      <div className="type3-info-div">
        <div className="type3-detail">
          <div className="type3-about">
            <div className="type3-name">{name}</div>
            <div className="type3-designation">{designation}</div>

            <hr className="type3-about-line" />
          </div>

          <div className="deco-img">
            <img
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Homepage/deco.png"
              alt="commas"
              title="commas"
            />
          </div>
        </div>
      </div>

      <hr className="card-divider" />

      <div
        className="type3-description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default Card3;
