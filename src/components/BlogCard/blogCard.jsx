import React from "react";

import "./styles.scss";

const BlogCard = (props) => {
  const { thumbnail, title, about, link } = props;
  return (
    <div className="blog-card-container">
      <div className="blog-img-div">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={thumbnail} alt={title} />
        </a>
      </div>

      <div className="content-div">
        <div className="title">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </div>

        <div className="about">{about}</div>
      </div>
    </div>
  );
};

export default BlogCard;
