import React from "react";
import Layout from "../components/Layout/layout";
import HeroSection from "../components/WorkWithUsApplyNow/HeroSection/heroSection";
import JobDescription from "../components/WorkWithUsApplyNow/JobDescription/jobDescription";
import { jobData } from "../components/WorkWithUs/JobOpenings/data";
import "./styles.scss";

function WorkWithUs({ id }) {
  let filterJobData = null;
  let invalidLink = false;
  const isJobExists = jobData.filter((data) => data.id === id);
  if (isJobExists.length <= 0) {
    filterJobData = { title: "Job Listening" };
    invalidLink = true;
  } else {
    filterJobData = jobData.find((data) => data.id === id);
  }

  return (
    <React.Fragment>
      <div className="main-work-with-us-apply-now-page">
        <Layout>
          <HeroSection jobData={filterJobData} invalidLink={invalidLink} />
          <JobDescription jobData={filterJobData} invalidLink={invalidLink} />
        </Layout>
      </div>
    </React.Fragment>
  );
}

export default WorkWithUs;
