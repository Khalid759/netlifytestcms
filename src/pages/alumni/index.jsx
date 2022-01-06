import React from "react";
import Seo from "../../components/Seo/seo";
import Layout from "../../components/Layout/layout";
import YoutubeSlider from "../../components/Alumni/YoutubeSlider";
import Testimonial1 from "../../components/Alumni/Testimonial1";
import Testimonial2 from "../../components/Alumni/Testimonial2";
import Testimonial3 from "../../components/Alumni/Testimonial3";
import "./styles.scss";
import Testimonial4 from "../../components/Alumni/Testimonial4";
import Testimonial5 from "../../components/Alumni/Testimonial5";

const Alumni = () => {
  return (
    <React.Fragment>
      <Seo
        title="Alumni | Kraftshala"
        description="Hear from our past students on their experience with Kraftshala’s INDUSTRYCreds™ programs.Hear from our alumni about their experience and their stories of how they have cracked their dream Marketing and Sales role."
        url="https://www.kraftshala.com/alumni/"
      />

      <div className="main-alumni-page">
        <Layout>
          <YoutubeSlider />
          <Testimonial1 />
          <Testimonial2 />
          <Testimonial3 />
          <Testimonial4 />
          <Testimonial5 />
        </Layout>
      </div>
    </React.Fragment>
  );
};

export default Alumni;
