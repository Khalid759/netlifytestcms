import React from "react";
import { Link } from "gatsby";
import BlogCard from "../../components/BlogCard/blogCard";
import Layout from "../../components/Layout/layout";

import { pageOne } from "../../components/BlogCard/data";

import "./styles.scss";

const Blogs = () => {
  return (
    <div className="main-blogs-page">
      <Layout>
        <div className="page-content inner-container">
          {pageOne.map((data) => {
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
            <div className="number active">1</div>
          </Link>
          <Link to="/blog/page/2">
            <div className="number">2</div>
          </Link>
          <Link to="/blog/page/2">
            <div className=" next">Next {">"}</div>
          </Link>
        </div>
      </Layout>
    </div>
  );
};

export default Blogs;
