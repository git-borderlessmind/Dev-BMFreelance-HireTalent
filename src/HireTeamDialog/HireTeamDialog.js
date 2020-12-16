import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import "./HireTeamDialog.css";
import closeicon from "../Stories/assets/close-icon.svg";
import hiringstepbg from "../Stories/assets/hiring-step-bg.jpg";
import { userActions } from "../_actions";

export const HireTeamDialog = ({ visibility, ...props }) => {
  const [DialogState, setDialogState] = useState("hide_dialog");
  const [jobtypes, setJobTypes] = useState([]);
  const [job_type, setSelectedJobType] = useState("");
  const [typeofproject, setSelectedTypeOfProject] = useState(
    "New idea or project"
  );
  const [displaystep, setDisplayStep] = useState("1");

  const dispatch = useDispatch();
  const renderHTML = (rawHTML) =>
    React.createElement("div", {
      dangerouslySetInnerHTML: { __html: rawHTML },
    });

  useEffect(() => {
    setDialogState(visibility);
  }, [visibility]);

  useEffect(() => {
    fetchJobTypes();
  }, []);

  const closeDialog = () => {
    setDialogState("hide_dialog");
  };

  function fetchJobTypes() {
    dispatch(
      userActions.getalljobtypeswithskills((datajobtypes) => {
        const jobtypesarray = [];
        var i = 0;
        datajobtypes.data.forEach((element) => {
          if (i == 0) {
            setSelectedJobType(element.jobtypeid);
          }
          jobtypesarray.push({
            value: element.jobtypeid,
            label: element.title,
            topskills: element.topskills,
          });
          i++;
        });
        setJobTypes(jobtypesarray);
      })
    );
  }

  function handleChange(e) {
    //console.log(e.target.value);
    setSelectedJobType(e.target.value);
  }

  function handleChangeTypeOfProject(e) {
    console.log(e.target.value);
    setSelectedTypeOfProject(e.target.value);
  }

  function handleStepOne() {
    console.log("handleStepOne");
    setDisplayStep("2");
  }

  function ShowStepOne() {
    setDisplayStep("1");
  }

  function handleStepTwo() {
    console.log("handleStepTwo");
    setDisplayStep("3");
  }

  return (
    <React.Fragment>
      <div className={["dialog_wrapper", DialogState].join(" ")}>
        <div className="dialog">
          <section id="hire_talent_content">
            <div className="close">
              <img src={closeicon} alt="" onClick={closeDialog} />
            </div>
            <div className="hire_tal_con_wrapper">
              <div
                className="hire_lft_con"
                style={{ backgroundImage: `url(${hiringstepbg})` }}
              >
                <div className="hire_lft_content">
                  <div className="hire_left_strip">
                    <h5>Great!</h5>
                    <p>Thank you for showing your interest in us</p>
                  </div>
                </div>
              </div>
              <div className="hire_rht_con">
                <div
                  className={
                    displaystep == "1" ? "inner_rht_content" : "hide_dialog"
                  }
                >
                  <div className="rht_content_header">
                    <h2>I am looking for...</h2>
                    <div className="step_nos">
                      Step <span>1</span> of <span>6</span>
                    </div>
                  </div>
                  <div className="step_pro_bar step_one">
                    <div className="step_pro_hightlight"></div>
                  </div>
                  <div className="steps_content">
                    <ul className="listing">
                      {jobtypes.map((jobtype, index) => {
                        return (
                          <li key={index}>
                            <div className="radio">
                              <input
                                id={"job_type_" + index}
                                type="radio"
                                name="job_type"
                                value={jobtype.value}
                                checked={
                                  job_type == jobtype.value ? true : false
                                }
                                onChange={handleChange}
                              />
                              <label htmlFor={"job_type_" + index}></label>
                            </div>
                            <div className="content">
                              <h6>{jobtype.label}</h6>
                              <div className="skillstext">
                                {renderHTML(jobtype.topskills)}
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="buttons_wrapper">
                    <button className="blue" onClick={handleStepOne}>
                      Get Started
                    </button>
                  </div>
                </div>

                <div
                  className={
                    displaystep == "2" ? "inner_rht_content" : "hide_dialog"
                  }
                >
                  <div className="rht_content_header">
                    <h2>What type of project are you hiring for?</h2>
                    <div className="step_nos">
                      Step <span>2</span> of <span>6</span>
                    </div>
                  </div>
                  <div className="step_pro_bar step_two">
                    <div className="step_pro_hightlight"></div>
                  </div>
                  <div className="steps_content">
                    <ul className="listing">
                      <li>
                        <div className="radio">
                          <input
                            id="new_project"
                            type="radio"
                            name="typeofproject"
                            value="New idea or project"
                            checked={
                              typeofproject == "New idea or project"
                                ? true
                                : false
                            }
                            onChange={handleChangeTypeOfProject}
                          />
                          <label htmlFor="new_project"></label>
                        </div>
                        <div className="content">
                          <p>New idea or project</p>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <input
                            id="existing_project"
                            type="radio"
                            name="typeofproject"
                            value="Existing project that needs more resources"
                            checked={
                              typeofproject ==
                              "Existing project that needs more resources"
                                ? true
                                : false
                            }
                            onChange={handleChangeTypeOfProject}
                          />
                          <label htmlFor="cloud"></label>
                        </div>
                        <div className="content">
                          <p>Existing project that needs more resources</p>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <input
                            id="ongoing_assistance"
                            type="radio"
                            name="typeofproject"
                            value="Ongoing assistance or consultation"
                            checked={
                              typeofproject ==
                              "Ongoing assistance or consultation"
                                ? true
                                : false
                            }
                            onChange={handleChangeTypeOfProject}
                          />
                          <label htmlFor="ongoing_assistance"></label>
                        </div>
                        <div className="content">
                          <p>Ongoing assistance or consultation</p>
                        </div>
                      </li>
                      <li>
                        <div className="radio">
                          <input
                            id="none"
                            type="radio"
                            name="typeofproject"
                            value="None of the above, I am just exploring Borderlessmind"
                            checked={
                              typeofproject ==
                              "None of the above, I am just exploring Borderlessmind"
                                ? true
                                : false
                            }
                            onChange={handleChangeTypeOfProject}
                          />
                          <label htmlFor="none"></label>
                        </div>
                        <div className="content">
                          <p>
                            None of the above, I am just exploring
                            Borderlessmind
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="buttons_wrapper">
                    <button className="white" onClick={ShowStepOne}>
                      Back
                    </button>
                    <button className="blue" onClick={handleStepTwo}>
                      Next
                    </button>
                  </div>
                </div>

                
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};
