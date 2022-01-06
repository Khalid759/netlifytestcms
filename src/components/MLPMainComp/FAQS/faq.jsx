import React from "react";
import Accordion from "./Accordion/accordion";
import { faqsData } from "./data";
import "./styles.scss";

function FAQ() {
  return (
    <div className="mlp-main-faq faq-container">
      <h2 className="mlp-faq-title">FAQ's</h2>

      {faqsData.map((info, k) => (
        <Accordion key={k} info={info} />
      ))}
    </div>
  );
}

export default FAQ;
