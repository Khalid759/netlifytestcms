import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import MLPForm from "../../components/Forms/MLPForm";
import AdmissionProcess from "../../components/MLPFormComp/AdmissionProcess";
import CardSection from "../../components/MLPFormComp/CardSection/cardSection";
import HeroSection from "../../components/MLPFormComp/HeroSection/heroSection";
import StudentSlider from "../../components/MLPFormComp/StudentSlider/studentSlider";
import Curriculum from "../../components/MLPFormComp/Curriculum/curriculum";
// import Seo from "../../components/SEO/seo"
import WhatsappWidget from "../../components/WhatsappWidget";

import "./styles.scss";

const MLPFormPage = (props) => {
  console.log("props", props);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // console.log("window object", window)
      if (window.fbq != null) {
        console.log("page view fbq run");
        window.fbq("track", "PageView");
      }
    }
  }, []);

  return (
    <div className="mlp_form-container">
      {/* <SEO url="https://www.kraftshala.com/marketing-launchpad-application-form" /> */}
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          property="og:title"
          content="Marketing Launchpad Application Form"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="The Marketing Launchpad with INDUSTRYCreds™ Certification This is 20 week online full-time program for which we select, train and invest in high potential graduates"
        />
        <meta
          property="og:image"
          content="https://kfwebassets.s3.ap-south-1.amazonaws.com/common/white_ArtboardKraftshala.png"
        />
        <meta
          property="og:url"
          content="https://www.kraftshala.com/marketing-launchpad-application-form/"
        />
        <title>Marketing Launchpad Application Form </title>
      </Helmet>
      <div className="hero-div">
        <HeroSection urlParams={props.location.search} />

        <MLPForm search={props.location.search} />
      </div>

      <CardSection />

      <hr className="mlp-divider" />

      <AdmissionProcess />

      <hr className="mlp-divider" />
      <StudentSlider />
      <Curriculum />
      <div
        className="comp-app-btn top-2"
        aria-hidden="true"
        onClick={() => {
          document.querySelector(".main-mlp-form").scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
          });
        }}
      >
        Complete your application
      </div>
      <WhatsappWidget link="https://wa.me/message/HHNAOZDIMB4ZE1" />
    </div>
  );
};

export default MLPFormPage;
