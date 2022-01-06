import React from "react";
import Accordion from "./Accordion/accordion";
import { faqsData } from "./data";
import "./styles.scss";

function FAQ() {
  return (
    <div className="bb-main-faq faq-container" id="faqs">
      <h2 className="bb-faq-title">FAQ's</h2>

      {faqsData.map((info, k) => (
        <Accordion key={k} info={info} />
      ))}
    </div>
  );
}

export default FAQ;
