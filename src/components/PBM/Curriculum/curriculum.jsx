import React from "react";
import Accordion from "./Accordion/accordion";
import { curriculumData } from "./data";
import "./styles.scss";

function Curriculum() {
  return (
    <div className="pbm-main-curriculum faq-container">
      <h2 className="pbm-curriculum-title">CURRICULUM</h2>

      {curriculumData.map((info, k) => (
        <Accordion key={k} info={info} />
      ))}
      <div className="learn-bestMB-border desktop-hide"></div>
    </div>
  );
}

export default Curriculum;
