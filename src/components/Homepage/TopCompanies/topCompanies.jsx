import React from "react";
import { data } from "./data";
import Card3 from "../../TestimonialCard/Card3/index";
import "./styles.scss";

export default function TopCompanies() {
  return (
    <div className="home-top-companies">
      <div className="container">
        <h2 className="top-companies-head">
          <span className="bold-text yellow-line-1">Top companies love </span>{" "}
          our talent and
          <span className="new-line yellow-line-2"> our training programs</span>
        </h2>

        {data.map((info) => {
          return <Card3 key={info.id} info={info} />;
        })}
      </div>
    </div>
  );
}
