import React from "react";
// import { Link } from 'gatsby';
import "./headerTwo.scss";

const HeaderTwo = () => {
  return (
    <div className="headerTwo-container">
      <div className="nav-div">
        <div className="head-logo">
          <a
            href="https://www.kraftshala.com/"
            target="_blank"
            rel="noreferrer"
          >
            {/* <Link to="/"> */}
            <img
              src="https://res.cloudinary.com/judiscloud/image/upload/v1582104052/white_Artboard_3_e8clge.svg"
              alt="Kraftshala Logo"
            />
          </a>
          {/* </Link> */}
        </div>

        <div className="program-name">
          <div className="program-title">
            <a
              href="https://www.kraftshala.com/professional-brand-management-in-the-digital-age/"
              target="_blank"
              rel="noreferrer"
            >
              {/* <Link to="/pbm"> */}
              Professional Brand Management in the Digital Age
              {/* </Link> */}
            </a>
          </div>

          <div className="program-subtitle">
            Fastest path to marketing leadership in the digital age
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTwo;
