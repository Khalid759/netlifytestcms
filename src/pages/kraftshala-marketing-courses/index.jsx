import React from "react";
import Layout from "../../components/Layout/layout";

// import Seo from "../../components/Seo/seo";
// import ChooseTrack from "../../components/MarketingCourses/ChooseTrack";
// import StudentTestimonials from "../../components/MarketingCourses/StudentTestimonials";
// import AboutCourses from "../../components/MarketingCourses/AboutCourses";

import "./styles.scss";

const MarketingCourses = () => {
  // const Layout = React.lazy(() => import("../../components/Layout/layout"));
  const Seo = React.lazy(() => import("../../components/Seo/seo"));
  const ChooseTrack = React.lazy(() =>
    import("../../components/MarketingCourses/ChooseTrack")
  );
  const StudentTestimonials = React.lazy(() =>
    import("../../components/MarketingCourses/StudentTestimonials")
  );
  const AboutCourses = React.lazy(() =>
    import("../../components/MarketingCourses/AboutCourses")
  );

  const isSSR = typeof window === "undefined";

  return (
    <React.Fragment>
      <Layout>
        {!isSSR && (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Seo
              title="Kraftshala Marketing Courses | Kraftshala"
              description=""
              url="https://www.kraftshala.com/kraftshala-marketing-courses/"
              noIndex={true}
            />

            <div className="marketing-courses-container">
              <ChooseTrack />
              <StudentTestimonials />
              <AboutCourses />
            </div>
          </React.Suspense>
        )}
      </Layout>
    </React.Fragment>
  );
};

export default MarketingCourses;
