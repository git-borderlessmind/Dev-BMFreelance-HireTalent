import React from "react";
import "./HowItWorksLeftBar.css";
import selectdesiredskillicon from "../Stories/assets/select-desired-skill-icon.svg";
import filltheformicon from "../Stories/assets/fill-the-form-icon.svg";
import interviewicon from "../Stories/assets/interview-icon.svg";
import projectkickofficon from "../Stories/assets/project-kick-off-icon.svg";

export const HowItWorksLeftBar = ({ ...props }) => {
  
  return (
    <React.Fragment>
      <div className="hire_lft_con step5_bg">
            <h1>How It Works?</h1>
            <p>Much like hiring a team <span>in-house,</span><br />
            but a lot easier and painless.</p>
            <ul>
                <li>
                    <span className="icon">
                        <img src={selectdesiredskillicon} alt="" />
                    </span>
                    <p>Select desired skill</p>
                </li>
                <li>
                    <span className="icon">
                        <img src={filltheformicon} alt="" />
                    </span>
                    <p>Fill the form</p>
                </li>
                <li>
                    <span className="icon">
                        <img src={interviewicon} alt="" />
                    </span>
                    <p>Interview</p>
                </li>
                <li>
                    <span className="icon">
                        <img src={projectkickofficon} alt="" />
                    </span>
                    <p>Project Kick Off</p>
                </li>
            </ul>
        </div>
    </React.Fragment>
  );
};
