import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";

function GoTo() {
  const handleClick = () => {
    const element = document.getElementById("overview");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div
      className="ml-goTo-section mtop-2"
      aria-hidden="true"
      onClick={handleClick}
    >
      <StaticImage
        src="https://kfwebassets.s3.ap-south-1.amazonaws.com/mlp_images/Subtract.png"
        alt="Go To Section"
        title="Go To Section"
        placeholder="none"
      />
    </div>
  );
}

export default GoTo;
