import React from "react";
import Seo from "../../components/Seo/seo";
import Layout from "../../components/Layout/layout";
import HeroSection from "../../components/KFLiveSeries/HeroSection/heroSection";
import WatchSession from "../../components/KFLiveSeries/WatchSession/watchSession";
import Information from "../../components/KFLiveSeries/Information/information";
import Reviews from "../../components/KFLiveSeries/Reviews/reviews";

import "./styles.scss";
const KraftshalaLiveSeries = () => {
  return (
    <React.Fragment>
      <Seo
        title="Kraftshala LIVE Professional Series | Kraftshala"
        description="Register for the professional series of Kraftshala LIVE for sessions on Marketing, Brand Strategy, and Media Planning etc."
        url="https://www.kraftshala.com/kraftshala-live-professional-series/"
      />

      <div className="kraftshala-live-series-page">
        <Layout>
          <HeroSection />
          <WatchSession />
          <Information />
          <Reviews />
        </Layout>
      </div>
    </React.Fragment>
  );
};

export default KraftshalaLiveSeries;
