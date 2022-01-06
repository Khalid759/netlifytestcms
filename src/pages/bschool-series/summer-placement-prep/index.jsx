import React from "react";

import Seo from "../../../components/Seo/seo";

import Layout from "../../../components/Layout/layout";
// import HeroSection from "../../../components/GoLiveBschool/HeroSection";

import HeroSection from "../../../components/GoLIveBschool/HeroSection/index.jsx";

import "./styles.scss";
const SummerPlacementPrep = () => {
  return (
    <React.Fragment>
      <Seo
        title="Summer Placements Prep | Kraftshala"
        description="This exclusive session is for B-school 1st year students who are preparing for their summer placement interviews. "
        url="https://www.kraftshala.com/bschool-series/summer-placement-prep/"
      />

      <div className="main-go-live-bschools-page">
        <Layout>
          <HeroSection />
        </Layout>
      </div>
    </React.Fragment>
  );
};

export default SummerPlacementPrep;
