import React from "react";
import Seo from "../../components/Seo/seo";
import Layout from "../../components/Layout/layout";
import HeroSection from "../../components/MLPMainComp/HeroSection/heroSection";
import GoTo from "../../components/MLPMainComp/GoTo/goTo";
import NavBar from "../../components/NavBar/navbar";
import Overview from "../../components/MLPMainComp/Overview/overview";
import Placements from "../../components/MLPMainComp/Placements/placements";
import Fee from "../../components/MLPMainComp/Fee/fee";
import Benefits from "../../components/MLPMainComp/Benefits/benefits";
import AdmissionProcess from "../../components/MLPMainComp/AdmissionProcess/admissionProcess";
import Trainers from "../../components/MLPMainComp/Trainers/trainers";
import Curriculum from "../../components/MLPMainComp/Curriculum/curriculum";
import Specialisations from "../../components/MLPMainComp/Specialisations/specialisations";
import Faq from "../../components/MLPMainComp/FAQS/faq";
// import WhatsappWidget from "../../components/WhatsappWidget";

import {
  courseSnipptJSON,
  faqSnipptJSON,
  videoSnipptJSON,
  eventSnipptJSON,
} from "../../components/Seo/mlpSeoData";

import "./styles.scss";
const MarketingLaunchPad = (props) => {
  const navBarContent = [
    {
      name: "Overview",
      id: "overview",
    },
    {
      name: "Placements",
      id: "placements",
    },
    {
      name: "Fee",
      id: "fee",
    },
    {
      name: "Benefits",
      id: "benefits",
    },
    // {
    //   name: "Admissions Process",
    //   id: "admissions",
    //   mobileHide: true,
    //   desktopHide: false,
    // },
    {
      name: "Admissions",
      id: "admissions",
      mobileHide: false,
      desktopHide: false,
    },
    {
      name: "Trainers",
      id: "trainers",
      mobileHide: true,
      desktopHide: false,
    },
    {
      name: "Specialisations",
      id: "curriculum",
    },
    {
      name: "FAQS",
      id: "faqs",
    },
  ];

  return (
    <React.Fragment>
      <Seo
        title="Marketing Launchpad-Online Digital Marketing Course | Kraftshala "
        description="The Marketing Launchpad is India's first pay after placement marketing course. It is a 20 week online digital marketing course with an 8 weeks paid internship"
        url="https://www.kraftshala.com/marketing-launchpad/"
        courseSnipptJSON={courseSnipptJSON}
        faqSnipptJSON={faqSnipptJSON}
        videoSnipptJSON={videoSnipptJSON}
        eventSnipptJSON={eventSnipptJSON}
      />

      <div className="main-mlp-page">
        <Layout>
          <HeroSection urlParams={props.location.search} />
          <GoTo />
          <NavBar
            content={navBarContent}
            applyLink={`/marketing-launchpad-application-form/${props.location.search}`}
          />

          <div id="overview" className="section">
            <Overview />
          </div>

          <div id="placements" className="section">
            <Placements />
          </div>

          <div id="fee" className="section">
            <Fee />
          </div>

          <div id="benefits" className="section">
            <Benefits />
          </div>

          <div id="admissions" className="section">
            <AdmissionProcess urlParams={props.location.search} />
          </div>

          <div id="trainers" className="section">
            <Trainers />
          </div>

          <div id="curriculum" className="section">
            <Specialisations />
            <Curriculum />
          </div>

          <div id="faqs" className="section">
            <Faq />
          </div>
        </Layout>
      </div>
      {/* <WhatsappWidget link="https://wa.me/message/HHNAOZDIMB4ZE1" /> */}
    </React.Fragment>
  );
};

export default MarketingLaunchPad;
