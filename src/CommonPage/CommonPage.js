import React from "react";
import "./commonPage.css";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { TemrsAndCondition } from "./TermsAndCondition";
import { CookiePolicy } from "./CookiePolicy";

export const CommonPage = ({ ...props }) => {
  var pageTitle;
  var pageContent;
  if (window.location.pathname === "/privacy-policy") {
    pageTitle = "Privacy Policy";
    pageContent = <PrivacyPolicy />;
  } else if (window.location.pathname === "/terms-and-conditions") {
    pageTitle = "Terms and Conditions";
    pageContent = <TemrsAndCondition />;
  } else {
    pageTitle = "Cookie Policy";
    pageContent = <CookiePolicy />;
  }

  return (
    <React.Fragment>
      <div>
        <Header />
        <section id="freelancers_banner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-10 col-sm-12 col-12 offset-xl-2 offset-lg-2 offset-md-1 offset-sm-0 offset-0">
                <h1>{pageTitle}</h1>
                <p>{pageContent}</p>
                {/* <a href="hire-talent-step1.html">Hire Best Talent</a> */}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
};
