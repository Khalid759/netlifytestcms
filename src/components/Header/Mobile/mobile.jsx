import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import "./styles.scss";

const Mobile = () => {
  const [openNav, setOpenNav] = useState(false);

  const [openPrograms, setOpenPrograms] = useState(false);
  const [openEntryLevel, setOpenEntryLevel] = useState(false);
  const [openManagerLevel, setOpenManagerLevel] = useState(false);
  const [openBschool, setOpenBschool] = useState(false);

  const [openBenefits, setOpenBenefits] = useState(false);
  const [openResources, setOpenResources] = useState(false);
  const [openForCompanies, setOpenForCompanies] = useState(false);

  // console.log("test")

  return (
    <div className="mob-nav-wrap">
      <div className="mob-head-wrap">
        <div className="mob-head-logo">
          <Link to="/">
            <StaticImage
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Homepage/kraftshala.png"
              alt="Kraftshala"
              title="Kraftshala"
              placeholder="none"
            />
          </Link>
        </div>
        <div
          className="mob-nav-logo"
          aria-hidden="true"
          onClick={() => setOpenNav(!openNav)}
        >
          <StaticImage
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Homepage/navIcon.png"
            alt="Nav"
            title="Nav"
            placeholder="none"
          />
        </div>
      </div>

      {openNav && (
        <nav className="mob-nav">
          <div className=" nav-programs">
            <div
              className="mob-head-link nav-list-title"
              aria-hidden="true"
              onClick={() => setOpenPrograms(!openPrograms)}
            >
              Programs
              <span className="nav-down-arrow"></span>
            </div>
            {openPrograms && (
              <div className="nav-sub-one nav-program-entry">
                <div
                  className="mob-head-link nav-list-title"
                  aria-hidden="true"
                  onClick={() => setOpenEntryLevel(!openEntryLevel)}
                >
                  - For Entry Level Roles
                  <span className="nav-down-arrow"></span>
                </div>
                {openEntryLevel && (
                  <Link
                    to="/marketing-launchpad"
                    className="mob-head-link nav-list nav-sub-two"
                  >
                    -- Marketing LaunchPad
                  </Link>
                )}
              </div>
            )}

            {openPrograms && (
              <div className="nav-sub-one nav-program-manager">
                <div
                  className="mob-head-link nav-list-title"
                  aria-hidden="true"
                  onClick={() => setOpenManagerLevel(!openManagerLevel)}
                >
                  - For Manager Level Roles
                  <span className="nav-down-arrow"></span>
                </div>

                {openManagerLevel && (
                  <Link
                    to="/professional-brand-management-in-the-digital-age"
                    className="mob-head-link nav-list nav-sub-two"
                  >
                    -- Professional Brand Management in the Digital Age
                  </Link>
                )}
              </div>
            )}

            {openPrograms && (
              <div className="nav-sub-one nav-program-bschool">
                <div
                  className="mob-head-link nav-list-title"
                  aria-hidden="true"
                  onClick={() => setOpenBschool(!openBschool)}
                >
                  - For B-School Students
                  <span className="nav-down-arrow"></span>
                </div>
                {openBschool && (
                  <>
                    <Link
                      to="/digital-brand-building"
                      className="mob-head-link nav-list nav-sub-two"
                    >
                      -- Digital Brand Building
                    </Link>
                    <Link
                      to="/brand-building"
                      className="mob-head-link nav-list nav-sub-two"
                    >
                      -- Brand Building
                    </Link>
                    <Link
                      to="/sales-leadership"
                      className="mob-head-link nav-list nav-sub-two"
                    >
                      -- Sales Leadership
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>

          <div className="nav-benefits">
            <div
              className="mob-head-link nav-list-title"
              aria-hidden="true"
              onClick={() => setOpenBenefits(!openBenefits)}
            >
              Benefits
              <span className="nav-down-arrow"></span>
            </div>
            {openBenefits && (
              <>
                <Link
                  to="/industrycreds-experience"
                  className="mob-head-link nav-list nav-sub-one"
                >
                  <div>
                    {" "}
                    - Industry Creds<sup>TM</sup> Certification
                  </div>
                </Link>
                <Link
                  to="/career-support"
                  className="mob-head-link nav-list nav-sub-one"
                >
                  - Carrer Placement
                </Link>
                <Link
                  to="/alumni"
                  className="mob-head-link nav-list nav-sub-one"
                >
                  - Alumni Stories
                </Link>
              </>
            )}
          </div>

          <div className="nav-resources">
            <div
              className="mob-head-link nav-list-title"
              aria-hidden="true"
              onClick={() => setOpenResources(!openResources)}
            >
              Resourses
              <span className="nav-down-arrow"></span>
            </div>
            {openResources && (
              <>
                <Link
                  to="/kraftshala-live-professional-series"
                  className="mob-head-link nav-list nav-sub-one"
                >
                  - Kraftshala Live
                </Link>
                <Link
                  to="/blogs"
                  className="mob-head-link nav-list nav-sub-one"
                >
                  - Blog
                </Link>
              </>
            )}
          </div>

          <div className="nav-forcompaines">
            <div
              className="mob-head-link nav-list-title"
              aria-hidden="true"
              onClick={() => setOpenForCompanies(!openForCompanies)}
            >
              For Companies
              <span className="nav-down-arrow"></span>
            </div>
            {openForCompanies && (
              <>
                <Link
                  to="/kraftshala-hiring"
                  className="mob-head-link nav-list nav-sub-one"
                >
                  <div>
                    {" "}
                    - Hire an INDUSTRYCreds<sup>TM</sup> professional
                  </div>
                </Link>
                <Link
                  to="/corporate-trainings"
                  className="mob-head-link nav-list nav-sub-one"
                >
                  - Train your team
                </Link>
              </>
            )}
          </div>
        </nav>
      )}
    </div>
  );
};

export default Mobile;
