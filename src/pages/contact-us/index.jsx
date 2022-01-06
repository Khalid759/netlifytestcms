import React from "react";
import Seo from "../../components/Seo/seo";
import Layout from "../../components/Layout/layout";
import HeroSection from "../../components/ContactUs/HeroSection";

import "./styles.scss";
const ContactUs = () => {
  return (
    <React.Fragment>
      <Seo
        title="Contact Us | Kraftshala"
        description="Do you want to enrol in the INDUSTRYCreds™ programs? Are you looking for training solutions for your company? Are you looking to join us as an expert? We’d love to hear from you."
        url="https://www.kraftshala.com/contact-us/"
      />

      <div className="main-contact-us-page">
        <Layout>
          <HeroSection />
        </Layout>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
