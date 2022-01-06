import React, { useEffect } from "react";
import { Link } from "gatsby";
import "./navbar.scss";

const NavBar = (props) => {
  const { content } = props;

  useEffect(() => {
    const isSSR = typeof window === "undefined";
    if (!isSSR) {
      // console.log("not server side rendering");
      const navbar = window.document.querySelector(".page-navbar");

      const handleScroll = () => {
        if (window.pageYOffset >= 630) {
          navbar.classList.add("sticky-nav");
          // console.log("add sticky");
        } else {
          navbar.classList.remove("sticky-nav");
          // console.log("remove sticky!");
        }
        highlightNav(navbar);
      };

      if (navbar) {
        window.addEventListener("scroll", handleScroll);
      }

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      console.log("server side rendering");
    }
  }, []);

  const highlightNav = (navbar) => {
    // console.log(navbar.offsetHeight);
    let section = document.querySelectorAll(".section");
    if (section) {
      let sections = {};
      let i = 0;

      Array.prototype.forEach.call(section, function (e) {
        sections[e.id] = e.offsetTop - 100;
      });
      let scrollPosition = window.document.documentElement.scrollTop;

      for (i in sections) {
        if (sections[i] <= scrollPosition + navbar.offsetHeight) {
          let selectedLink = window.document.querySelector(".selected-link");

          if (selectedLink) {
            // selectedLink.setAttribute("class", " ");
            selectedLink.classList.remove("selected-link");
          }

          let ele = window.document.getElementById(`${i}-nav`);

          if (ele) {
            ele.classList.add("selected-link");
          }
        }
      }
    }
  };

  const handleClick = (id) => {
    const navbar = window.document.querySelector(".page-navbar");

    const navBarHeight = navbar.offsetHeight;

    const element = document.getElementById(id).offsetTop - navBarHeight;

    window.scroll({ top: element, behavior: "smooth" });

    // if (element) {
    //   element.scrollIntoView({
    //     behavior: "smooth",
    //     block: "start",
    //     inline: "nearest",
    //   });
    // }
  };

  return (
    <div className="page-navbar">
      {content.map((link, k) =>
        !link.formLink ? (
          <div
            onClick={() => handleClick(link.id)}
            aria-hidden="true"
            key={k}
            id={`${link.id}-nav`}
            className={
              "page-link " +
              (link.desktopHide ? "desktop-hide " : "") +
              (link.mobileHide ? "mobile-hide" : "")
            }
          >
            {link.name}
          </div>
        ) : (
          <div
            onClick={props.showFormHandler}
            aria-hidden="true"
            key={k}
            id={`${link.id}-nav`}
            className={
              link.formLink
                ? "nav-apply "
                : "page-link " +
                  (link.desktopHide ? "desktop-hide " : "") +
                  (link.mobileHide ? "mobile-hide" : "")
            }
          >
            {link.name}
          </div>
        )
      )}
      {props.applyLink && (
        <Link to={`${props.applyLink}`} className="nav-apply">
          Apply Now
        </Link>
      )}
    </div>
  );
};

export default NavBar;
