import React from "react";
import Seo from "../components/Seo/seo";
import Layout from "../components/Layout/layout";
import HeroSection from "../components/Homepage/HeroSection";
import PickProgram from "../components/Homepage/PickProgram/pickProgram";
import KraftshalaWorks from "../components/Homepage/KraftshalaWorks/kraftshalaWorks";
import StudentsBridgeGap from "../components/Homepage/StudentsBridgeGap/index";
import TopCompanies from "../components/Homepage/TopCompanies/topCompanies";
import ForSeo from "../components/Homepage/ForSeo";

import "./styles.scss";

export default function Home() {
  const homeSnippt = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://www.kraftshala.com/",
    logo:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/Kraftshala-Social.png",
  };

  const courseSnippt = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: "https://www.kraftshala.com/marketing-launchpad/",
      },
      {
        "@type": "ListItem",
        position: 2,
        url:
          "https://www.kraftshala.com/professional-brand-management-in-the-digital-age/",
      },
    ],
  };

  return (
    <div className="main-homepage">
      <Seo
        title="Online Courses with INDUSTRYCreds™ Certification | Kraftshala"
        description="Kraftshala makes India’s most loved online courses for students & professionals that are 100% industry-driven. Be a part of India’s most promising talent today"
        url="https://www.kraftshala.com/"
        homeSnipptJSON={JSON.stringify(homeSnippt)}
        courseSnipptJSON={JSON.stringify(courseSnippt)}
      />
      <Layout>
        <HeroSection />
        <PickProgram />
        <ForSeo />
        <KraftshalaWorks />
        <StudentsBridgeGap />
        <TopCompanies />
      </Layout>
    </div>
  );
}
