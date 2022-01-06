import React from "react";
import Layout from "../components/Layout/layout";

const NotFound = () => {
  const browser = typeof window !== "undefined" && window;

  return (
    <>
      {browser && (
        <Layout>
          <div className="container">
            <h1 style={{ padding: "2em 0" }}>404: Page Not Found</h1>
          </div>
        </Layout>
      )}
    </>
  );
};

export default NotFound;
