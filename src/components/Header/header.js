import React from "react";
import Desktop from "./Desktop/desktop";
import Mobile from "./Mobile/mobile";
import "./header.scss";

const Header = () => {
  // const Desktop = React.lazy(() => import("./Desktop/desktop"));
  // const Mobile = React.lazy(() => import("./Mobile/mobile"));

  // const isSSR = typeof window === "undefined";

  return (
    <div className="header-container">
      <Desktop />
      <Mobile />
      {/* {!isSSR && (
        <React.Suspense fallback={<div>React Lazy testing</div>}>
         
        </React.Suspense>
      )} */}
    </div>
  );
};

export default Header;
