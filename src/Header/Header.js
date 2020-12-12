import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from '../Stories/assets/logo.svg';

export const Header = ({ ...props }) => {
  return (
    <React.Fragment>
      <header id="freelancers">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="javascript:void(0);">
                  <img src={logo} alt="" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item search_icon">
                      <label>
                        <span className="material-icons">search</span> Hire Your
                        Team
                      </label>
                      <div id="dotLine"></div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="#">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Schedule A Call Now
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        FAQs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Insight
                      </a>
                    </li>
                    <li className="nav-item free_trial">
                      <a className="nav-link" href="#">
                        Free Trial
                      </a>
                    </li>
                    <li className="nav-item contact_link">
                      <a className="nav-link" href="tel:+18882673375">
                        +1 (888) 267.3375
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div id="searchBox">
                <div className="container">
                  <div className="col-lg-12 col-sm-12 col-xs-12">
                    <div className="searchBx">
                      <input
                        type="text"
                        id="custom-search"
                        className="custom-search search-box"
                        placeholder="Search a specific skill"
                        value=""
                        name="custom-search"
                      />
                      <div id="datafetch" className="result">
                        <span className="material-icons">search</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
