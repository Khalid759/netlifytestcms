import React from "react";
import "./styles.scss";

const HeroSection = () => {
  const scrollTo = () => {
    const element = document.querySelector("#career-program-section");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  return (
    <div className="career-header-container">
      <div className="career-header-content">
        <h1 className="career-header-title">Placement Assistance</h1>
        <p className="career-header-desc">
          Getting that interview to converting the interview - we work with you
          to create a stellar resume, prepare you for an interview and do a
          targeted pushing of your candidature basis your profile, preference
          and performance in the program.
        </p>

        <div className="career-btn" aria-hidden="true" onClick={scrollTo}>
          APPLY FOR PROGRAMS
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
