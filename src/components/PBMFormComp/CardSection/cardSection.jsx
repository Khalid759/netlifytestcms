import React from "react";

const data = [
  {
    image_url:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_Form/icon-1.png",
    title: "Practical",
    description:
      "You learn best from people who have succeeded in the roles that you want to be in.",
  },

  {
    image_url:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_Form/icon-2.png",
    title: "Personalised",
    description:
      "You get better at marketing by discussing, not just doing it yourself. In the program, you work in groups of 3-4 and discuss your work every week with an industry expert.",
  },

  {
    image_url:
      "https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_Form/icon-3.png",
    title: "Performance-driven",
    description:
      "Sharpening your career strategy, to working towards that goal, to getting that actual lift in your career - the program has a parallel track called CAMP to help you do this. ",
  },
];

function CardSection() {
  return (
    <div className="card-section-div">
      <div className="card-head">
        Professional Brand Management in the Digital age is a course designed &
        delivered 100% by industry’s top practitioners
      </div>

      <div className="card-container">
        {data.map((info, k) => {
          return (
            <div key={k} className="card-div">
              <div className="card-icon">
                <img src={info.image_url} alt={info.title} />
              </div>

              <div className="card-info">
                <div className="card-title">{info.title}</div>

                <div className="card-description">{info.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardSection;
