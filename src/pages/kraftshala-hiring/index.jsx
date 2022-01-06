import React from "react";
import Hero from "../../components/KraftshalaTraining/Hero";
import HiringSolutions from "../../components/KraftshalaTraining/HiringSolutions";
import Overview from "../../components/KraftshalaTraining/Overview";
import TopCompanies from "../../components/KraftshalaTraining/TopCompanies";
import Layout from "../../components/Layout/layout";
// import Courses from "../../components/KraftshalaTraining/Courses";
import Form from "../../components/Forms/KraftshalaTraining/index";
import Standards from "../../components/KraftshalaTraining/Standards";

import "./styles.scss";

const KraftshalaHiring = () => {
  return (
    <div className="kraftshala-hiring-container">
      <Layout>
        <Hero />
        <Overview />
        <Standards />
        <TopCompanies />
        <HiringSolutions />
        {/* <Courses /> */}

        <div className=" for-footer">
          <div className="inner-container">
            <Form />
          </div>

          <div className="footerbg"></div>
        </div>
      </Layout>
    </div>
  );
};

export default KraftshalaHiring;
