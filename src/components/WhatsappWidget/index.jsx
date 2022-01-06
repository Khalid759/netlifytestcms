import React from "react";
// import LazyLoad from "react-lazyload";

import "./styles.scss";

const WhatsappWidget = ({ link }) => {
  return (
    <div className="whatsapp-wid-container">
      <a href={link} target="_blank" rel="noreferrer">
        {/* <LazyLoad> */}
        <img
          src="https://kfwebassets.s3.ap-south-1.amazonaws.com/whatsapp-icon.svg"
          width="88"
          height="88"
          alt="Whatsapp Widget"
        />
        {/* </LazyLoad> */}
      </a>
    </div>
  );
};

export default WhatsappWidget;
