import React, { useState, useEffect } from "react";
import "./FreelancersList.css";
import temp from "../Stories/assets/temp.svg";


export const FreelancersList = ({ ...props }) => {
  return (
    <React.Fragment>
      <div className="candidate_listing">
        <ul>
          <li>
            <div className="img">
              <img src={temp} alt="" width="244" />
            </div>
            <div className="content">
              <h4>Akshat Mittal</h4>
              <p>Full-stack Developer</p>
            </div>
          </li>
          <li>
            <div className="img">
              <img src={temp} alt="" />
            </div>
            <div className="content">
              <h4>Chitra Agrawal</h4>
              <p>Product Manager</p>
            </div>
          </li>
          <li>
            <div className="img">
              <img src={temp} alt="" />
            </div>
            <div className="content">
              <h4>Sripal Reddy Vindyal</h4>
              <p>Front-End Developer</p>
            </div>
          </li>
          <li>
            <div className="img">
              <img src={temp} alt="" />
            </div>
            <div className="content">
              <h4>Asif Iqbal</h4>
              <p>Python Developer</p>
            </div>
          </li>
          <li>
            <div className="img">
              <img src={temp} alt="" />
            </div>
            <div className="content">
              <h4>Akshay Sood</h4>
              <p>Financial Expert</p>
            </div>
          </li>
          <li>
            <div className="img">
              <img src={temp} alt="" />
            </div>
            <div className="content">
              <h4>David Anaya</h4>
              <p>Product Expert</p>
            </div>
          </li>
          <li>
            <div className="img">
              <img src={temp} alt="" />
            </div>
            <div className="content">
              <h4>Sohil Singh</h4>
              <p>MBA Expert</p>
            </div>
          </li>
          <li>
            <div className="img">
              <img src={temp} alt="" />
            </div>
            <div className="content">
              <h4>Vignes Aruljothi</h4>
              <p>IT Project Manager</p>
            </div>
          </li>
          <li>
            <div className="img">
              <img src={temp} alt="" />
            </div>
            <div className="content">
              <h4>Abhishek Tyagi</h4>
              <p>Android Developer</p>
            </div>
          </li>
          <li>
            <div className="img">
              <img src={temp} alt="" />
            </div>
            <div className="content">
              <h4>Mehul Gohil</h4>
              <p>QA Engineer</p>
            </div>
          </li>
          <li>
            <div className="img">
              <img src={temp} alt="" />
            </div>
            <div className="content">
              <h4>Gyanesh Changlani</h4>
              <p>PHP Developer</p>
            </div>
          </li>
          <li>
            <div className="img">
              <img src={temp} alt="" />
            </div>
            <div className="content">
              <h4>Aashu Yadav</h4>
              <p>Finance Expert</p>
            </div>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
