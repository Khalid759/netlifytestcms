import React, { useState } from "react";
import Layout from "../../components/Layout/layout";
import HeroSection from "../../components/DBB/HeroSection/heroSection";
import Overview from "../../components/DBB/Overview/overview";
import Benefits from "../../components/DBB/Benefits/benefits";
import Architect from "../../components/DBB/Architect/architect";
import Insights from "../../components/DBB/Insights/insights";
import Mentors from "../../components/DBB/Mentors/mentors";
import Fee from "../../components/DBB/Fee/fee";
import YoutubeSlider from "../../components/DBB/YoutubeSlider/youtubeSlider";
import KraftshalaExperience from "../../components/DBB/KraftshalaExperience/kraftshalaExperience";
import Partners from "../../components/DBB/Partners/partners";
import Curriculum from "../../components/DBB/Curriculum/curriculum";
import Faq from "../../components/DBB/FAQS/faq";
import Programs from "../../components/DBB/Programs/programs";
import DBBForm from "../../components/Forms/DBBForm";
import Seo from "../../components/Seo/seo";
import NavBar from "../../components/NavBar/navbar";

import {
  courseSnipptJSON,
  faqSnipptJSON,
} from "../../components/Seo/dbbSeoData";

import "./styles.scss";

const DigitalBrandBuilding = () => {
  const [showForm, setShowForm] = useState(false);
  const showFormHandler = () => {
    setShowForm(true);
    setTimeout(function () {
      const navbar = window.document.querySelector(".page-navbar");

      const navBarHeight = navbar.offsetHeight;
      const element =
        document.getElementById("dbb-form").offsetTop - navBarHeight - 20;

      if (element) {
        window.scroll({ top: element, behavior: "smooth" });
      }
    }, 100);
  };

  const navBarContent = [
    {
      name: "Overview",
      id: "overview",
    },
    {
      name: "Benefits",
      id: "benefits",
    },
    {
      name: "Partners",
      id: "partners",
    },
    {
      name: "Architect",
      id: "architect",
    },
    {
      name: "Fee",
      id: "fee",
    },
    {
      name: "Curriculum",
      id: "curriculum",
    },
    {
      name: "FAQS",
      id: "faqs",
    },
    {
      name: "Get Notified",
      id: "apply",
      formLink: true,
    },
  ];

  return (
    <React.Fragment>
      <Seo
        title="Online Digital Branding Course for MBA students | Kraftshala "
        description="A digital branding & marketing certification course for MBA students to master brand communication and digital media planning. Get INDUSTRYCreds™ certified today."
        url="https://www.kraftshala.com/digital-brand-building/"
        courseSnipptJSON={courseSnipptJSON}
        faqSnipptJSON={faqSnipptJSON}
      />

      <div className="main-dbb-page">
        <Layout>
          <HeroSection showFormHandler={showFormHandler} />
          <NavBar content={navBarContent} showFormHandler={showFormHandler} />
          <div id="overview" className="section">
            <Overview />
          </div>
          <div id="benefits" className="section">
            <Benefits />
          </div>
          <div id="partners" className="section">
            <Partners />
          </div>
          <div id="architect" className="section">
            <Architect />
            <Insights />
            <Mentors />
          </div>
          <div id="fee" className="section">
            <Fee showFormHandler={showFormHandler} />
          </div>

          {showForm && <DBBForm />}

          <YoutubeSlider />
          <KraftshalaExperience />
          <div id="curriculum" className="section">
            <Curriculum />
          </div>
          <div id="faqs" className="section">
            <Faq />
          </div>
          <Programs />
        </Layout>
      </div>
    </React.Fragment>
  );
};

export default DigitalBrandBuilding;
