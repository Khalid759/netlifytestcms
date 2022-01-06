import React from "react";
import Header from "../../Header/header";
import Footer from "../../Footer/footer";

import "./styles.scss";

const Card = (props) => {
  return (
    <div className="sidebar-card">
      <div className="sidebar-title">{props.title}</div>

      <div className="sidebar-trademark">
        <span> with</span> INDUSTRY<b>Creds™</b> Certification
      </div>

      <div className="sidebar-about">{props.about}</div>

      <div className="sidebar-cta">
        <a href={props.link} target="_blank" rel="noreferrer">
          Apply Now
        </a>
      </div>
    </div>
  );
};

const BlogLayout = (props) => {
  const { link } = props;

  const shareLinks = [
    {
      id: "1",
      logo: "facebook.svg",
      url: `https://www.facebook.com/sharer.php?u=${link}`,
    },
    {
      id: "2",
      logo: "twiiter.svg",
      url: `https://twitter.com/intent/tweet?url=${link}`,
    },
    {
      id: "3",
      logo: "linkedin.svg",
      url: `https://www.linkedin.com/shareArticle?mini=true&amp;url=${link}`,
    },

    // {
    //   id: "4",
    //   logo: "whatsapp.svg",
    //   url: `https://api.whatsapp.com/send?text=${link}`,
    // },
  ];

  return (
    <div className="blog-layout-container">
      <Header />

      <div className="blog-layout-wrapper container">
        <div
          className={
            "blog-content " + (props.hideSidebar ? "blog-content-center" : "")
          }
        >
          {props.children}
          <div className="blog-footer">
            <div className="share-title">
              Share this story, Choose your platform!
            </div>

            <div className="share-logos">
              {shareLinks.map((link, k) => {
                return (
                  <div key={k}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={`https://kfwebassets.s3.ap-south-1.amazonaws.com/blog/${link.logo}`}
                        alt="social logo"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {!props.hideSidebar && (
          <div className="blog-sidebar">
            <Card
              title="Marketing Launchpad"
              about="This is 20 week online full-time program for which we select, train and invest in high potential graduates to help them start a fantastic career in marketing. The best part? You pay ONLY when you land a job with a minimum CTC of INR 4.5 lakhs."
              link="https://www.kraftshala.com/marketing-launchpad-application-form"
            />
            <Card
              title="Professional Brand Management In The Digital Age"
              about="This is an intensive online course which delivers decades worth of hard-earned insights & industry experience in 20 weeks.You learn side-by-side from industry experts who’ve built their careers growing brands across sectors and industries and leveraging traditional and digital media to drive business growth"
              link="https://www.kraftshala.com/professional-brand-management-in-the-digital-age-application-form"
            />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default BlogLayout;
