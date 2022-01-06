import React from "react";
import Seo from "../../components/Seo/seo";
import Layout from "../../components/Layout/layout";
import HeroSection from "../../components/WorkWithUs/HeroSection/heroSection";
import Kode from "../../components/WorkWithUs/Kode/kode";
import TeamSlider from "../../components/WorkWithUs/TeamSlider/teamSlider";
import JobOpenings from "../../components/WorkWithUs/JobOpenings/jobOpenings";

import "./styles.scss";
const WorkWithUs = () => {
  return (
    <React.Fragment>
      <Seo
        title="Work with Us | Kraftshala Jobs and Career"
        description="Our team is trying to bring transformative changes to India's Online Education system by delivering industry insight through our Courses. Come work with us."
        url="https://www.kraftshala.com/work-with-us/"
      />

      <div className="main-work-with-us-page">
        <Layout>
          <HeroSection />
          <Kode />
          <TeamSlider />
          <JobOpenings />
        </Layout>
      </div>
    </React.Fragment>
  );
};

export default WorkWithUs;
