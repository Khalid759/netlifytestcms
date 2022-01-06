import React, { useEffect } from "react";
import PBMForm from "../../components/Forms/PBMForm/index";
import AdmissionProcess from "../../components/PBMFormComp/AdmissionProcess";
import Companies from "../../components/PBMFormComp/Companies";
import Trainers from "../../components/PBMFormComp/Trainers";
import CardSection from "../../components/PBMFormComp/CardSection/cardSection";
import HeroSection from "../../components/PBMFormComp/HeroSection/heroSection";
import StudentSlider from "../../components/PBMFormComp/StudentSlider/studentSlider";
import Seo from "../../components/Seo/seo";
import "./styles.scss";

const PBMFormPage = (props) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.fbq != null) {
        console.log("page view fbq run");
        window.fbq("track", "PageView");
      }
    }
  }, []);

  return (
    <React.Fragment>
      <Seo
        title="Professional Brand Management Application form"
        description="Kraftshala’s Brand Management in the Digital Age helps you
        transition into your dream marketing role through 22 weeks of high
        intensity learning and working on real problems under guidance of
        industry’s top marketing leaders."
        url="https://www.kraftshala.com/professional-brand-management-in-the-digital-age-application-form/"
      />
      <div className="pbm_form-container">
        <div className="hero-div">
          <HeroSection urlParams={props.location.search} />

          <PBMForm search={props.location.search} />
        </div>

        <CardSection />
        <div className="pbm-divider"></div>
        <Trainers />
        <div className="pbm-divider"></div>
        <AdmissionProcess />

        <StudentSlider />

        <Companies />

        <div
          className="comp-app-btn top-2"
          aria-hidden="true"
          onClick={() => {
            document.querySelector(".pbm-group").scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest",
            });
          }}
        >
          Complete your application
        </div>
      </div>
    </React.Fragment>
  );
};

export default PBMFormPage;
