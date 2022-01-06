import React from "react";
import Seo from "../../components/Seo/seo";
import Layout from "../../components/Layout/layout";
import HeroSection from "../../components/About/HeroSection/heroSection";
import Overview from "../../components/About/Overview/overview";
import Story from "../../components/About/Story";
import Investors from "../../components/About/Investors";
import Founders from "../../components/About/Founders";
import Team from "../../components/About/Team";

import "./styles.scss";
const AboutUs = () => {
  return (
    <React.Fragment>
      <Seo
        title="About Us | Kraftshala"
        description="Kraftshala is India's most loved sales and marketing training platform. Our team is gunning to bring transformative changes to India’s online learning ecosystem"
        url="https://www.kraftshala.com/about/"
      />

      <div className="main-about-page">
        <Layout>
          <HeroSection />
          <Overview />
          <Story />
          <Investors />
          <Founders />
          <Team />
        </Layout>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
