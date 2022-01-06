import React from "react";
import Accordion from "./Accordion/accordion";
import { curriculumData } from "./data";
import "./styles.scss";

function Curriculum() {
  return (
    <div className="sl-main-curriculum faq-container" id="curriculum">
      <h2 className="sl-curriculum-title">CURRICULUM</h2>

      {curriculumData.map((info, k) => (
        <Accordion key={k} info={info} />
      ))}
      <div className="learn-bestMB-border desktop-hide-800"></div>
    </div>
  );
}

export default Curriculum;
