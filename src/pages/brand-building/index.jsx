import React, { useState } from "react";
import Layout from "../../components/Layout/layout";
import HeroSection from "../../components/BB/HeroSection/heroSection";
import Overview from "../../components/BB/Overview/overview";
import Benefits from "../../components/BB/Benefits/benefits";
import Architect from "../../components/BB/Architect/architect";
import Insights from "../../components/BB/Insights/insights";
import Mentors from "../../components/BB/Mentors/mentors";
import Fee from "../../components/BB/Fee/fee";
import YoutubeSlider from "../../components/BB/YoutubeSlider/youtubeSlider";
import KraftshalaExperience from "../../components/BB/KraftshalaExperience/kraftshalaExperience";
import Partners from "../../components/BB/Partners/partners";
import Curriculum from "../../components/BB/Curriculum/curriculum";
import Faq from "../../components/BB/FAQS/faq";
import Programs from "../../components/BB/Programs/programs";
import BBForm from "../../components/Forms/BBForm";
import Seo from "../../components/Seo/seo";
import NavBar from "../../components/NavBar/navbar";

import {
  courseSnipptJSON,
  faqSnipptJSON,
} from "../../components/Seo/bbSeoData";

import "./styles.scss";

const DigitalBrandBuilding = () => {
  const [showForm, setShowForm] = useState(false);
  const showFormHandler = () => {
    setShowForm(true);
    setTimeout(function () {
      const navbar = window.document.querySelector(".page-navbar");

      const navBarHeight = navbar.offsetHeight;
      const element =
        document.getElementById("bb-form").offsetTop - navBarHeight - 20;

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
        title="Online Brand Building Course for MBA Students | Kraftshala"
        description="An online certification course for MBA marketing students. It helps you master brand communication to get an edge in placements.Get INDUSTRYCreds™ certified today. "
        url="https://www.kraftshala.com/brand-building/"
        courseSnipptJSON={courseSnipptJSON}
        faqSnipptJSON={faqSnipptJSON}
      />

      <div className="main-bb-page">
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

          {showForm && <BBForm />}

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
