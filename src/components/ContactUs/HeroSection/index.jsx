import React from "react";
import "./styles.scss";
import ContactUsForm from "../../Forms/ContactUsForm";

const HeroSection = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-us-wrap">
        <div className="contact-us-hero-content">
          <p className="contact-us-hero-content-heading">GOT A QUESTION?</p>
          <p className="contact-us-hero-content-desc">
            We'd love to hear from you and we'll respond as soon as possible.
          </p>
        </div>
      </div>
      <ContactUsForm />
    </div>
  );
};

export default HeroSection;
