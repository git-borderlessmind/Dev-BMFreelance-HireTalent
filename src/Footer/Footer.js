import React, { useState, useEffect } from "react";
import "./Footer.css";
/*import inc5000logo from "../Stories/assets/inc-5000-logo.svg";
import texasexeslogo from "../Stories/assets/texas-exes-logo.svg";
import mbelogo from "../Stories/assets/mbe-logo.svg";
import smallbusinesseslogo from "../Stories/assets/10000-small-businesses-logo.svg";
import eqlogo from "../Stories/assets/eq-logo.svg";
import bizwnersedlogo from "../Stories/assets/biz-wnersed-logo.svg";
import inc5000logo1 from "../Stories/assets/inc5000_logo.svg";*/

export const Footer = ({ ...props }) => {
  return (
    <React.Fragment>
      <footer>
        <div className="footercls">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                <div className="addressbx">
                  Address:
                  <br />
                  <br />
                  <a
                    className="ftraddress"
                    href="https://www.google.ca/maps/place/ISHIR/@28.609515,77.3680221,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce4f7eaaaaaab:0x248e900a4cda2996!8m2!3d28.6095103!4d77.3702161"
                    target="_blank"
                  >
                    D-44, Sector 59, Noida, Uttar Pradesh 201301, India
                  </a>
                  <br />
                  <br />
                  Have Questions?
                  <div className="phCls">
                    <a
                      style={{color:'#1c94d2'}, {textDecoration: 'none'}}
                      href="tel:+18882673375"
                    >
                      +1 (888) 267.3375
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
                <div className="footerlinks">
                  <ul>
                    <li>
                      <a href="https://www.borderlessmind.com/hire-your-team/">
                        Hire Your Team
                      </a>
                    </li>
                    <li>
                      <a href="https://www.borderlessmind.com/#WhyBorderlessMind">
                        Why BorderlessMind
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://app.hubspot.com/meetings/ishir/speak-with-the-experts-at-borderlessmind"
                        target="_blank"
                      >
                        Schedule A Call NOW
                      </a>
                    </li>
                    <li>
                      <a href="https://www.borderlessmind.com/about-us/">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="https://www.borderlessmind.com/faqs/">FAQs</a>
                    </li>
                    <li>
                      <a href="https://www.borderlessmind.com/blog/">Insight</a>
                    </li>
                    <li>
                      <a href="https://www.borderlessmind.com/sitemap/">
                        Sitemap
                      </a>
                    </li>
                    <li>
                      <a href="https://www.borderlessmind.com/privacy-policy/">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                <div className="footerlinks">
                  <ul>
                    <li>
                      <a href="https://www.borderlessmind.com/free-trial/">
                        Risk Free Trial
                      </a>
                    </li>
                    <li>
                      <a href="https://www.borderlessmind.com/free-trial/">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="https://www.borderlessmind.com/hire-your-team/">
                        Hire Best Remote Talent
                      </a>
                    </li>
                    <li>
                      <a href="https://www.borderlessmind.com/hire-your-team/">
                        Hire Top 5% Remote Talent
                      </a>
                    </li>
                    <li>
                      <a href="https://www.borderlessmind.com/hire-your-team/">
                        Hire Top Remote Talent On Demand
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4  col-sm-12 col-12">
                <ul className="certifiedLogo">
                  <li>
                    <a target="_blank" href="https://www.inc.com/profile/ishir">
                      {/* <img src={inc5000logo1} alt="" /> */}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-12 col-sm-12 col-xs-12">
                <div className="row">
                  <div className="col-lg-12 col-sm-12 col-xs-12">
                    <div className="footerLogoBx">
                      <div className="flbHeading">
                        <span>Alumni from</span>
                      </div>
                      {/* <ul>
                        <li>
                          <img src={inc5000logo} alt="" />
                        </li>
                        <li>
                          <img src={texasexeslogo} alt="" />
                        </li>
                        <li>
                          <img src={mbelogo} alt="" />
                        </li>
                        <li>
                          <img src={smallbusinesseslogo} alt="" />
                        </li>
                        <li>
                          <img src={eqlogo} alt="" />
                        </li>
                        <li>
                          <img src={bizwnersedlogo} alt="" />
                        </li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footerCls">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-xs-12">
                <div className="copyTxt">
                  <div className="fottercopy">
                    <p>
                      © 2020{" "}
                      <a href="https://www.borderlessmind.com">
                        BorderlessMind.com
                      </a>{" "}
                      All rights reserved.
                    </p>
                  </div>
                  <div className="orcor">
                    OFFSHORE / NEARSHORE / ONSHORE STAFFING
                  </div>
                  <div className="fotterLogo">
                    <a href="https://www.borderlessmind.com">
                      BorderlessMind.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
