import React from "react";

function HeroSection(props) {
  return (
    <div className="wwuan-header-container">
      <div className="wwuan-header-content">
        <h1 className="wwuan-header-content-heading">{props.jobData.title}</h1>
        <div className="wwuan-header-content-btn-wrap">
          {/* {!props.invalidLink && props.jobData.is_active && (
            <button
              className="wwuan-header-content-btn"
              onClick={handleBtnClick}
            >
              apply now
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
