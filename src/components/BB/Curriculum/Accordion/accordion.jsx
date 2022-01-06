import React, { useState } from "react";

function Accordion({ info }) {
  const [selected, setSelected] = useState(false);

  return (
    <div className="custom-accordion">
      <div className="accordion-section">
        <div
          className={"accordion-head " + (selected ? "selected" : "")}
          aria-hidden="true"
          onClick={() => setSelected(!selected)}
        >
          <h3 className="accordion-title">{info.title}</h3>

          <div className={selected ? "arrow-down" : "arrow-right"}></div>
        </div>

        {selected && (
          <div
            className="accordion-content"
            dangerouslySetInnerHTML={{ __html: info.description }}
          />
        )}
      </div>
    </div>
  );
}

export default Accordion;
