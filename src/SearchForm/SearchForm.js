import React, { useState, useEffect } from "react";
import "./SearchForm.css";

export const SearchForm = ({ ...props }) => {
  return (
    <React.Fragment>
      <div className="search_container">
        <h3>Search what suits you...</h3>
        <ul>
          <li>
            <label>What domain you are into?</label>
            <span>
              <select>
                <option>e.g: Design, Testing etc...</option>
              </select>
            </span>
          </li>
          <li>
            <label>What are the service you offer?</label>
            <span>
              <select>
                <option>Select</option>
              </select>
            </span>
          </li>
          <li className="button">
            <button>Find</button>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
