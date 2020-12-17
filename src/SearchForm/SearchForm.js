import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import "./SearchForm.css";
import { userActions } from "../_actions";

export const SearchForm = ({ ...props }) => {
  const [submitted, setSubmitted] = useState(false);
  const [skillDisabled, setSkillDisabled] = useState(true);
  const [jobtypes, setJobTypes] = useState([]);
  const [skills, setSkills] = useState([]);
  const [searchcriteria, setSearchCriteria] = useState({
    job_type: ""/*,
    skill: "",*/
  });
  const { job_type, skill } = searchcriteria;
  const [listfreelancers, setFreelancers] = useState({
    freelancers: [],
  });
  const { freelancers } = listfreelancers;
  const dispatch = useDispatch();

  function fetchJobTypes() {
    dispatch(
      userActions.getalljobtypes((datajobtypes) => {
        const jobtypesarray = [];
        datajobtypes.data.forEach((element) => {
          jobtypesarray.push({
            value: element.id,
            label: element.description,
          });
        });
        setJobTypes(jobtypesarray);
      })
    );
  }
  /*function fetchSkills(jobtypeid) {
    dispatch(
      userActions.getJobTypeSkills(jobtypeid, (dataskills) => {
        const skillsarray = [];
        dataskills.data.forEach((element) => {
          skillsarray.push({
            value: element.id,
            label: element.name,
          });
        });
        setSkills(skillsarray);
        setSkillDisabled(false);
      })
    );
  }*/

  useEffect(() => {
    fetchJobTypes();
  }, []);

  function handleJobTypeChange(e) {
    console.log("handleJobTypeChange-->" + e.value);
    setSearchCriteria((searchcriteria) => ({
      ...searchcriteria,
      ["job_type"]: e.value,
    }));
    //fetchSkills(e.value);
  }

  /*function handleSkillChange(e) {
    setSearchCriteria((searchcriteria) => ({
      ...searchcriteria,
      ["skill"]: e.value,
    }));
  }*/

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    //if (job_type && skill) {
    if (job_type) {  
      dispatch(userActions.searchFreelancers({
        'job_type': job_type/*,
        'skill':skill*/
      }, returndata =>{
        setFreelancers(freelancersdata => ({
          ...listfreelancers,
          ['freelancers']: freelancersdata.data
        }));
      }));
    }
  }
  return (
    <React.Fragment>
      <div className="search_container">
        <form name="form" onSubmit={handleSubmit}>
          <h3>Search what suits you...</h3>
          <ul>
            <li>
              <label>What domain you are into?</label>
              <span>
                <Select
                  className={[
                    "bm_select",
                    submitted && job_type === ""
                      ? "bm_select_error"
                      : "bm_hide_select_error",
                  ].join(" ")}
                  defaultValue={jobtypes[1]}
                  menuColor="red"
                  name="job_type"
                  options={jobtypes}
                  placeholder="e.g: Design, Testing etc..."
                  value={jobtypes.filter(
                    (obj) => obj.value === searchcriteria.job_type
                  )}
                  onChange={handleJobTypeChange}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: '0.25rem',
                    colors: {
                    ...theme.colors,
                      primary: '#1C94D2',
                      primary25: '#e1f4fb',
                      primary50: '#b3e3f5',
                      primary75: '#82d0ef',
                    },
                  })}
                />
                <span
                  className={
                    submitted && job_type === ""
                      ? "show_select_error"
                      : "hide_select_error"
                  }
                >
                  Please select an option.
                </span>
              </span>
            </li>
            {/* <li>
              <label>What are the service you offer?</label>
              <span>
                <Select
                  className={[
                    "bm_select",
                    submitted && skill === ""
                      ? "bm_select_error"
                      : "bm_hide_select_error",
                  ].join(" ")}
                  defaultValue={skills[1]}
                  menuColor="red"
                  name="skill"
                  options={skills}
                  placeholder="Select"
                  value={skills.filter(
                    (obj) => obj.value === searchcriteria.skill
                  )}
                  isDisabled={skillDisabled}
                  onChange={handleSkillChange}
                />
                <span
                  className={
                    submitted && skill === ""
                      ? "show_select_error"
                      : "hide_select_error"
                  }
                >
                  Please select an option.
                </span>
              </span>
            </li> */}
            <li className="button">
              <button>Find</button>
            </li>
          </ul>
        </form>
      </div>
    </React.Fragment>
  );
};
