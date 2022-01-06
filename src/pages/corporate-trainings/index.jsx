import React from "react";
import About from "../../components/CorporateTraining/About/about";
import Advisors from "../../components/CorporateTraining/Advisors/advisors";
import Benefit from "../../components/CorporateTraining/Benefit/benefit";
import Clients from "../../components/CorporateTraining/Clients/clients";
import ClientFeedback from "../../components/CorporateTraining/ClientFeedback/clientFeedback";
import Hero from "../../components/CorporateTraining/Hero/hero";
import Mentors from "../../components/CorporateTraining/Mentors/mentors";
import Overview from "../../components/CorporateTraining/Overview/overview";
import Form from "../../components/Forms/CorporateTraining/HeroForm";
import Layout from "../../components/Layout/layout";
import Seo from "../../components/Seo/seo";
import "./styles.scss";

const CorporateTrainings = () => {
  return (
    <React.Fragment>
      <Seo
        title="Corporate Training Program in Marketing and Sales | Kraftshala "
        description="Kraftshala’s Corporate Training - Get customized solutions created by Marketing and Sales practitioners for training entry-level and mid-level professionals."
        url="https://www.kraftshala.com/corporate-trainings/"
      />
      <div className="corporate-training-container">
        <Layout>
          <Hero />
          <Overview />
          <Benefit />
          <About />
          <Clients />
          <ClientFeedback />
          <Advisors />
          <Mentors />

          <div className=" for-footer">
            <div className="inner-container">
              <Form />
            </div>

            <div className="footerbg"></div>
          </div>
        </Layout>
      </div>
    </React.Fragment>
  );
};

export default CorporateTrainings;
