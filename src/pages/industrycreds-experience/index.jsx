import React from "react";
import CourseFormat from "../../components/IndustryCredsExp/CourseFormat";
import HeroSection from "../../components/IndustryCredsExp/HeroSection";
import HowDoYou from "../../components/IndustryCredsExp/HowDoYou";
import Overview from "../../components/IndustryCredsExp/Overview";
import PickAProgram from "../../components/IndustryCredsExp/PickAProgram";
import ProgramArch from "../../components/IndustryCredsExp/ProgramArch";
import Seo from "../../components/Seo/seo";
import Layout from "../../components/Layout/layout";

import "./styles.scss";

const IndustryCreds = () => {
  return (
    <React.Fragment>
      <Seo
        title="INDUSTRYCreds™ - Sales & Marketing Certification | Kraftshala"
        description="INDUSTRYCreds™ - A Sales and Marketing certification. 100% industry-driven to help you get into and deliver in your dream roles from Day 1. Read more on how it works."
        url="https://www.kraftshala.com/industrycreds-experience/"
      />
      <div className="industrycreds-page">
        <Layout>
          <HeroSection />
          <Overview />
          <CourseFormat />
          <ProgramArch />
          <HowDoYou />
          <PickAProgram />
        </Layout>
      </div>
    </React.Fragment>
  );
};

export default IndustryCreds;
