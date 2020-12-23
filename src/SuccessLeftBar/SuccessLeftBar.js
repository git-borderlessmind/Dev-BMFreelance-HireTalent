import React from "react";
import "./SuccessLeftBar.css";
import sucthankicon from "../Stories/assets/thank-you-icon.svg";
import sucbmlogo from "../Stories/assets/success-logo.svg";
import texasexeslogo from "../Stories/assets/success-taxas-logo.svg";
import mbelogo from "../Stories/assets/success-mbe-logo.svg";
import smallbusinesseslogo from "../Stories/assets/success-small-bus-logo.svg";
import eqlogo from "../Stories/assets/success-eq-logo.svg";
import bizwnersedlogo from "../Stories/assets/success-biz-logo.svg";
import inc5000logo from "../Stories/assets/success-eq-logo.svg";
export const SuccessLeftBar = ({ ...props }) => {
  
  return (
    <React.Fragment>
      <div className="hire_lft_con success_lft_back">
        {/* <h1>Success Left Bar</h1> */}
      </div>
      <div className="hire_rht_con step_success_content">
          <div className="inner_rht_content success_rgt_wrapper">
              <div className="success_con_wrapper">
                  <div className="success_msg_logo"><a href="https://www.borderlessmind.com/"><img src={sucbmlogo} alt="" />
                  </a></div>
                  <div className="success_content">
                      <div className="success_logo">
                          <img src={sucthankicon} alt="" />
                      </div>
                      <h1>Great!</h1>
                      <p>Thank you for showing your interest.<br />
                      We will get back to you soon!</p>
                      <button className="success_cta_btn"    onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.borderlessmind.com/';
      }}>Back to Homepage</button>
                      <ul className="success_bot_logos">
                          <li><img src={inc5000logo} alt="" /></li>
                          <li><img src={mbelogo} alt="" /></li>
                          <li><img src={texasexeslogo} alt="" /></li>
                          <li><img src={smallbusinesseslogo} alt="" /></li>
                          <li><img src={bizwnersedlogo} alt="" /></li>
                          <li><img src={eqlogo} alt="" /></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    </React.Fragment>
  );
};
