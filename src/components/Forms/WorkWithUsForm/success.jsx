import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";

function WorkWithUsSuccess(props) {
  return (
    <div className="wwuan-success-group">
      <StaticImage
        src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Work_with_us/Apply_now/check_circle.webp"
        placeholder="none"
        alt="success"
      />
      <p className="wwuan-success-msg">
        Thanks for expressing your interest in working with us! Your profile has
        been forwarded to the relevant team. They will get in touch with you in
        case your profile is a match with the open job role requirements.
      </p>
    </div>
  );
}

export default WorkWithUsSuccess;
