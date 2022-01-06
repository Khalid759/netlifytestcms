import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { headerLinks } from "../data";
import { Link } from "gatsby";

import "./styles.scss";

const Desktop = () => {
  return (
    <div className="desktop-nav-wrap">
      <nav className="desktop-nav">
        <div className="desktop-head-logo">
          <Link to="/">
            <StaticImage
              // src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Homepage/kraftshala.png"
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/common/kraftshala-1.png"
              alt="Kraftshala"
              title="Kraftshala"
              placeholder="none"
            />
          </Link>
        </div>
        <ul className="desktop-nav__menu">
          {headerLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href="/#">{link.name}</a>

                <ul>
                  {link.dropDown.map((innerLink) => {
                    return (
                      <li key={innerLink.id}>
                        {innerLink.link ? (
                          <Link to={innerLink.link}>{innerLink.name}</Link>
                        ) : (
                          <a href="/#">{innerLink.name}</a>
                        )}

                        {innerLink.innerLevel && (
                          <ul>
                            {innerLink.innerLevel.map((lastLink) => {
                              return (
                                <li key={lastLink.id}>
                                  <Link to={lastLink.link}>
                                    {lastLink.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Desktop;
