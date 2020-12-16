import React, { useState, useEffect } from "react";
import "./FreelancersList.css";
import EllipsisText from "react-ellipsis-text";
import temp from "../Stories/assets/temp.svg";

export const FreelancersList = ({ ...props }) => {
  const [listfreelancers, setFreelancers] = useState({
    freelancers: [],
  });
  const { freelancers } = listfreelancers;

  useEffect(() => {
    setFreelancers(props.freelancers);
  }, [props.freelancers]);
  return (
    <React.Fragment>
      <div className="candidate_listing">
        <ul>
          {freelancers.map((freelancer, index) => {
            return (
              <li>
                <div className="img">
                  <img
                    src={
                      freelancer.profile_photo ? freelancer.profile_photo : temp
                    }
                    width="244"
                    className="usrpics"
                  />
                </div>
                <div className="content">
                  <h4>{freelancer.name}</h4>
                  <p>
                    {/* <EllipsisText text={freelancer.title} length={"20"} /> */}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};
