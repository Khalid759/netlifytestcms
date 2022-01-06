import React from "react";
import { Link } from "gatsby";
import BlogCard from "../../../components/BlogCard/blogCard";
import Layout from "../../../components/Layout/layout";
import { pageTwo } from "../../../components/BlogCard/data";

import "../styles.scss";

const BlogPage = () => {
  return (
    <div className="main-blogs-page">
      <Layout>
        <div className="page-content inner-container">
          {pageTwo.map((data) => {
            return (
              <BlogCard
                key={data.id}
                thumbnail={data.thumbnail}
                title={data.title}
                about={data.about}
                type={data.type}
                link={data.link}
              />
            );
          })}
        </div>

        <div className="pagination inner-container">
          <Link to="/blog">
            <div className="prev">{"<"} Prev</div>
          </Link>
          <Link to="/blog">
            <div className="number">1</div>
          </Link>
          <Link to="/blog/page/2">
            <div className="number active">2</div>
          </Link>
        </div>
      </Layout>
    </div>
  );
};

export default BlogPage;
