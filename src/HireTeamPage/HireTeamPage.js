import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import "./HireTeamPage.css";
import { userActions } from "../_actions";
// simport hiringstepbg from "../Stories/assets/hiring-step-bg.jpg";
import { Textarea } from "../Stories/Textarea/Textarea";
import AutoSuggest from 'react-autosuggest';

export const HireTeamPage = ({ ...props }) => {
  const [jobtypes, setJobTypes] = useState([]);
  const [job_type, setSelectedJobType] = useState("");
  const [job_type_title, setSelectedJobTypeTitle] = useState("");
  const [skills, setSkills] = useState([]);
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [lowerCasedSkills, setLowerCasedSkills] = useState([]);
  const [typeofproject, setSelectedTypeOfProject] = useState(
    "New idea or project"
  );
  const [durationofproject, setSelectedDurationOfProject] = useState(
    "Less than 1 week"
  );
  const [numberofresources, setSelectedNumberOfResources] = useState("Only 1");
  const [desired_areas_of_expertise, setDesiredAreasOfExpertise] = useState("");

  const [displaystep, setDisplayStep] = useState("1");
  const dispatch = useDispatch();
  const renderHTML = (rawHTML) =>
    React.createElement("div", {
      dangerouslySetInnerHTML: { __html: rawHTML },
    });

  useEffect(() => {
    fetchJobTypes();
  }, []);

  function getSuggestions(value) {
    return lowerCasedSkills.filter(skl =>
      skl.name.includes(value.trim().toLowerCase())
    );
  }
  
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
  function fetchSkills(jobtypeid) {
    dispatch(
      userActions.getJobTypeSkills(jobtypeid, (dataskills) => {
        const skillsarray = [];
        const allskillsarray = [];
        var i = 0;
        dataskills.data.forEach((element) => {
          i++;
          if (i <= 10) {
            skillsarray.push({
              value: element.id,
              label: element.name,
            });
          }
          allskillsarray.push({
            value: element.id,
            label: element.name,
          });
        });
        setSkills(skillsarray);
        setSuggestions(allskillsarray);
        setSelectedJobTypeTitle(dataskills.jobtype.title);
      })
    );
  }

  function handleChangeJobType(e) {
    setSelectedJobType(e.target.value);
  }
  function handleChangeTypeOfProject(e) {
    console.log("handleChangeTypeOfProject");
    setSelectedTypeOfProject(e.target.value);
  }
  function handleChangeDurationOfProject(e) {
    setSelectedDurationOfProject(e.target.value);
  }
  function handleChangeNumberOfResources(e) {
    setSelectedNumberOfResources(e.target.value);
  }
  function handleChangeDesiredAreasOfExpertise(e) {
    setDesiredAreasOfExpertise(e.target.value);
  }

  function handleStepOne() {
    setDisplayStep("2");
  }
  function handleStepTwo() {
    setDisplayStep("3");
  }
  function handleStepThree() {
    setDisplayStep("4");
  }
  function handleStepFour() {
    setDisplayStep("5");
  }

  function ShowStepOne() {
    setDisplayStep("1");
  }
  function ShowStepTwo() {
    setDisplayStep("2");
  }
  function ShowStepThree() {
    setDisplayStep("3");
  }

  useEffect(() => {
    fetchSkills(job_type);
  }, [job_type]);
  

  return (
    <React.Fragment>
      <div>
        <Header />
        <section id="hire_talent_content">
          <div className="hire_tal_con_wrapper">
            <div
              className="hire_lft_con"
              // style={{ backgroundImage: `url(${hiringstepbg})` }}
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
                              checked={job_type == jobtype.value ? true : false}
                              onChange={handleChangeJobType}
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
                            typeofproject === "New idea or project"
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
                          None of the above, I am just exploring Borderlessmind
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

              <div
                className={
                  displaystep == "3" ? "inner_rht_content" : "hide_dialog"
                }
              >
                <div className="rht_content_header">
                  <h2>How long do you need the developer?</h2>
                  <div className="step_nos">
                    Step <span>3</span> of <span>6</span>
                  </div>
                </div>
                <div className="step_pro_bar step_three">
                  <div className="step_pro_hightlight"></div>
                </div>
                <div className="steps_content">
                  <ul className="listing">
                    <li>
                      <div className="radio">
                        <input
                          id="less_than_1_week"
                          type="radio"
                          name="durationofproject"
                          value="Less than 1 week"
                          checked={
                            durationofproject == "Less than 1 week"
                              ? true
                              : false
                          }
                          onChange={handleChangeDurationOfProject}
                        />
                        <label htmlFor="less_than_1_week"></label>
                      </div>
                      <div className="content">
                        <p>Less than 1 week</p>
                      </div>
                    </li>
                    <li>
                      <div className="radio">
                        <input
                          id="1_to_4_weeks"
                          type="radio"
                          name="durationofproject"
                          value="1 to 4 weeks"
                          checked={
                            durationofproject == "1 to 4 weeks" ? true : false
                          }
                          onChange={handleChangeDurationOfProject}
                        />
                        <label htmlFor="1_to_4_weeks"></label>
                      </div>
                      <div className="content">
                        <p>1 to 4 weeks</p>
                      </div>
                    </li>
                    <li>
                      <div className="radio">
                        <input
                          id="1_to_3_months"
                          type="radio"
                          name="durationofproject"
                          value="1 to 3 months"
                          checked={
                            durationofproject == "1 to 3 months" ? true : false
                          }
                          onChange={handleChangeDurationOfProject}
                        />
                        <label htmlFor="1_to_3_months"></label>
                      </div>
                      <div className="content">
                        <p>1 to 3 months</p>
                      </div>
                    </li>
                    <li>
                      <div className="radio">
                        <input
                          id="3_to_6_months"
                          type="radio"
                          name="durationofproject"
                          value="3 to 6 months"
                          checked={
                            durationofproject == "3 to 6 months" ? true : false
                          }
                          onChange={handleChangeDurationOfProject}
                        />
                        <label htmlFor="3_to_6_months"></label>
                      </div>
                      <div className="content">
                        <p>3 to 6 months</p>
                      </div>
                    </li>
                    <li>
                      <div className="radio">
                        <input
                          id="longer_than_6_months"
                          type="radio"
                          name="durationofproject"
                          value="Longer than 6 months"
                          checked={
                            durationofproject == "Longer than 6 months"
                              ? true
                              : false
                          }
                          onChange={handleChangeDurationOfProject}
                        />
                        <label htmlFor="longer_than_6_months"></label>
                      </div>
                      <div className="content">
                        <p>Longer than 6 months</p>
                      </div>
                    </li>
                    <li>
                      <div className="radio">
                        <input
                          id="not_sure_I_ll_decide_later"
                          type="radio"
                          name="durationofproject"
                          value="Not sure, I'll decide later"
                          checked={
                            durationofproject == "Not sure, I'll decide later"
                              ? true
                              : false
                          }
                          onChange={handleChangeDurationOfProject}
                        />
                        <label htmlFor="not_sure_I_ll_decide_later"></label>
                      </div>
                      <div className="content">
                        <p>Not sure, I'll decide later</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="buttons_wrapper">
                  <button className="white" onClick={ShowStepTwo}>
                    Back
                  </button>
                  <button className="blue" onClick={handleStepThree}>
                    Next
                  </button>
                </div>
              </div>

              <div
                className={
                  displaystep == "4" ? "inner_rht_content" : "hide_dialog"
                }
              >
                <div className="rht_content_header">
                  <h2>How many resources you need?</h2>
                  <div className="step_nos">
                    Step <span>4</span> of <span>6</span>
                  </div>
                </div>
                <div className="step_pro_bar step_four">
                  <div className="step_pro_hightlight"></div>
                </div>
                <div className="steps_content">
                  <ul className="listing">
                    <li>
                      <div className="radio">
                        <input
                          id="only_1"
                          type="radio"
                          name="numberofresources"
                          value="Only 1"
                          checked={numberofresources == "Only 1" ? true : false}
                          onChange={handleChangeNumberOfResources}
                        />
                        <label htmlFor="only_1"></label>
                      </div>
                      <div className="content">
                        <p>Only 1</p>
                      </div>
                    </li>
                    <li>
                      <div className="radio">
                        <input
                          id="multiple"
                          type="radio"
                          name="numberofresources"
                          value="Multiple"
                          checked={
                            numberofresources == "Multiple" ? true : false
                          }
                          onChange={handleChangeNumberOfResources}
                        />
                        <label htmlFor="multiple"></label>
                      </div>
                      <div className="content">
                        <p>Multiple</p>
                      </div>
                    </li>
                    <li>
                      <div className="radio">
                        <input
                          id="cross_functional_team"
                          type="radio"
                          name="numberofresources"
                          value="A cross-functional team (developers, designers, managers etc)"
                          checked={
                            numberofresources ==
                            "A cross-functional team (developers, designers, managers etc)"
                              ? true
                              : false
                          }
                          onChange={handleChangeNumberOfResources}
                        />
                        <label htmlFor="cross_functional_team"></label>
                      </div>
                      <div className="content">
                        <p>
                          A cross-functional team (developers, designers,
                          managers etc)
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="radio">
                        <input
                          id="num_resources_not_sure"
                          type="radio"
                          name="numberofresources"
                          value="Not sure, I'll decide later"
                          checked={
                            numberofresources == "Not sure, I'll decide later"
                              ? true
                              : false
                          }
                          onChange={handleChangeNumberOfResources}
                        />
                        <label htmlFor="num_resources_not_sure"></label>
                      </div>
                      <div className="content">
                        <p>Not sure, I'll decide later</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="buttons_wrapper">
                  <button className="white" onClick={ShowStepThree}>
                    Back
                  </button>
                  <button className="blue" onClick={handleStepFour}>
                    Next
                  </button>
                </div>
              </div>

              <div
                className={
                  displaystep == "5" ? "inner_rht_content" : "hide_dialog"
                }
              >
                <div className="rht_content_header">
                  <h2>What skills would you like to see in your new hire?</h2>
                  <div className="step_nos">
                    Step <span>5</span> of <span>6</span>
                  </div>
                </div>
                <div className="step_pro_bar step_five">
                  <div className="step_pro_hightlight"></div>
                </div>
                <div className="steps_content">
                  <div className="textarea">
                    <Textarea
                      placeholder="Desired areas of expertise (e.g., Javascript, Ruby etc )"
                      name="desired_areas_of_expertise"
                      value={desired_areas_of_expertise}
                      onChange={handleChangeDesiredAreasOfExpertise}
                    ></Textarea>
                    {/* <label>5000 character left</label> */}
                  </div>
                  <ul className="chips_listing">
                    <li className="selected">+ Javascript</li>
                    <li className="selected">+ CSS</li>
                  </ul>
                  <div className="popular_skills">
                    <label>Popular skills for {job_type_title}</label>
                    <AutoSuggest
                        suggestions={suggestions}
                        onSuggestionsClearRequested={() => setSuggestions([])}
                        onSuggestionsFetchRequested={({ value }) => {
                            setValue(value);
                            setSuggestions(getSuggestions(value));
                        }}
                        onSuggestionSelected={(_, { suggestionValue }) =>
                            //console.log("Selected: " + suggestionValue);
                            addMoreSkills(suggestionValue)
                        }
                        getSuggestionValue={suggestion => suggestion.name}
                        renderSuggestion={suggestion => <span>{suggestion.name}</span>}
                        inputProps={{
                        placeholder: "Search Skill name (e.g: Angular, Figma, PHP etc)",
                        value: value,
                        onChange: (_, { newValue, method }) => {
                            setValue(newValue);
                        }
                        }}
                        highlightFirstSuggestion={true}
                    />
                  </div>
                  <ul className="chips_listing">
                    {skills.map((skill, index) => {
                      return <li key={index}>+ {skill.label}</li>;
                    })}
                  </ul>
                </div>
                <div className="buttons_wrapper">
                  <button className="white left">Skip for now</button>
                  <button className="white">Back</button>
                  <button className="blue">Next</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
};
