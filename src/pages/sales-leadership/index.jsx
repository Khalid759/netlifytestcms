import React, { useState } from "react";
import Layout from "../../components/Layout/layout";
import HeroSection from "../../components/SL/HeroSection/heroSection";
import Overview from "../../components/SL/Overview/overview";
import Benefits from "../../components/SL/Benefits/benefits";
import Architect from "../../components/SL/Architect/architect";
import Insights from "../../components/SL/Insights/insights";
import Mentors from "../../components/SL/Mentors/mentors";
import Fee from "../../components/SL/Fee/fee";
import YoutubeSlider from "../../components/SL/YoutubeSlider/youtubeSlider";
import KraftshalaExperience from "../../components/SL/KraftshalaExperience/kraftshalaExperience";
import Partners from "../../components/SL/Partners/partners";
import Curriculum from "../../components/SL/Curriculum/curriculum";
import Faq from "../../components/SL/FAQS/faq";
import Programs from "../../components/SL/Programs/programs";
import SLForm from "../../components/Forms/SLForm";
import Seo from "../../components/Seo/seo";
import NavBar from "../../components/NavBar/navbar";

import {
  courseSnipptJSON,
  faqSnipptJSON,
} from "../../components/Seo/slSeoData";

import "./styles.scss";

const SalesLeadership = () => {
  const [showForm, setShowForm] = useState(false);
  const showFormHandler = () => {
    setShowForm(true);
    setTimeout(function () {
      const navbar = window.document.querySelector(".page-navbar");

      const navBarHeight = navbar.offsetHeight;
      const element =
        document.getElementById("sl-form").offsetTop - navBarHeight - 20;

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
      name: "GetNotified",
      id: "apply",
      formLink: true,
    },
  ];

  return (
    <React.Fragment>
      <Seo
        title="Sales Leadership:Online Sales Training Program|Kraftshala"
        description="An online sales training course for MBA students. Master the role of Area Sales Manager and E-Commerce category manager. Get INDUSTRYCreds??? certified today"
        url="https://www.kraftshala.com/sales-leadership/"
        courseSnipptJSON={courseSnipptJSON}
        faqSnipptJSON={faqSnipptJSON}
      />

      <div className="main-sl-page">
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

          {showForm && <SLForm />}

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

export default SalesLeadership;
