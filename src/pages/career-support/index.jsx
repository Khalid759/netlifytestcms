import React from "react";
import Seo from "../../components/Seo/seo";
import Layout from "../../components/Layout/layout";
import HeroSection from "../../components/CareerSupport/HeroSection/heroSection";
import GetHired from "../../components/CareerSupport/GetHired/getHired";
import PickAProgram from "../../components/CareerSupport/PickAProgram";

import "./styles.scss";
const CareerSupport = () => {
  return (
    <React.Fragment>
      <Seo
        title="Placement training and assistance | Kraftshala"
        description="Kraftshala provides a pay-after-placement program for entry-level roles and placement assistance for lateral roles through mentorship programs. Apply today"
        url="https://www.kraftshala.com/career-support/"
      />

      <div className="main-career-support-page">
        <Layout>
          <HeroSection />
          <GetHired />
          <PickAProgram />
        </Layout>
      </div>
    </React.Fragment>
  );
};

export default CareerSupport;
