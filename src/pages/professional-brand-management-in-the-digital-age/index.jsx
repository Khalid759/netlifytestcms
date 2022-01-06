import React from "react";
import Seo from "../../components/Seo/seo";
import Layout from "../../components/Layout/layout";
import NavBar from "../../components/NavBar/navbar";
import HeroSection from "../../components/PBM/HeroSection/heroSection";
import OverView from "../../components/PBM/Overview/overview";
import Trainers from "../../components/PBM/Trainers/trainers";
import Review from "../../components/PBM/Review/review";
import SuccessSteps from "../../components/PBM/SuccessSteps/successSteps";
import Fee from "../../components/PBM/Fee/fee";
import SafeSpace from "../../components/PBM/SafeSpace/safeSpace";
import AdmissionProcess from "../../components/PBM/AdmissionProcess/admissionProcess";
import Curriculum from "../../components/PBM/Curriculum/curriculum";
import Faq from "../../components/PBM/FAQS/faq";
import YoutubeSlider from "../../components/PBM/YoutubeSlider/youtubeSlider";

import {
  courseSnipptJSON,
  faqSnipptJSON,
} from "../../components/Seo/pbmSeoData";

import "./styles.scss";

const PBM = (props) => {
  const navBarContent = [
    {
      name: "Overview",
      id: "overview",
    },
    {
      name: "Trainers",
      id: "trainers",
    },
    {
      name: "Career Support",
      id: "career-support",
    },
    {
      name: "Alumni",
      id: "alumni",
    },
    {
      name: "Admissions",
      id: "admissions",
    },
    {
      name: "Curriculum",
      id: "curriculum",
    },
    {
      name: "FAQs",
      id: "faqs",
      mobileHide: true,
      desktopHide: false,
    },
  ];

  return (
    <React.Fragment>
      <Seo
        title="Online Brand Management Course with Digital Marketing | Kraftshala"
        description="20 week Online Brand Management Course with Digital Marketing Training for professionals. Your fastest path to top marketing roles through a Career Acceleration Program."
        url="https://www.kraftshala.com/professional-brand-management-in-the-digital-age/"
        courseSnipptJSON={courseSnipptJSON}
        faqSnipptJSON={faqSnipptJSON}
      />
      <div className="main-pbm-page">
        <Layout>
          <HeroSection urlParams={props.location.search} />
          <NavBar
            content={navBarContent}
            applyLink={`/professional-brand-management-in-the-digital-age-application-form/${props.location.search}`}
          />
          <div id="overview" className="section">
            <OverView />
          </div>

          <div id="trainers" className="section">
            <Trainers />
          </div>

          <Review />

          <div id="career-support" className="section">
            <SuccessSteps />
          </div>

          <div id="fee" className="section">
            <Fee urlParams={props.location.search} />
          </div>

          <SafeSpace />

          <div id="alumni" className="section">
            <YoutubeSlider />
          </div>

          <div id="admissions" className="section">
            <AdmissionProcess />
          </div>

          <div id="curriculum" className="section">
            <Curriculum />
          </div>

          <div id="faqs" className="section">
            <Faq />
          </div>
        </Layout>
      </div>
    </React.Fragment>
  );
};

export default PBM;
