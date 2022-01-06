import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";

function ContactUsSuccess(props) {
  return (
    <div className="contact-us-success-group">
      <StaticImage
        src="https://kfwebassets.s3.ap-south-1.amazonaws.com/contact/success.webp"
        alt="form success"
        placeholder="none"
      />
      <p className="contact-us-success-msg">
        Thank you for showing interest. We will get back to you soon !
      </p>
    </div>
  );
}

export default ContactUsSuccess;
