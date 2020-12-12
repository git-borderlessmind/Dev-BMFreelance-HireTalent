import React from 'react';
import PropTypes from 'prop-types';
import './logo.css';
import logo from '../../assets/logo.svg';

export const Logo = ({ primary, ...props }) => {
    
    return(
        <div className="logo"><img src={logo} alt=""/></div>
    );
};

Logo.propTypes = {
    primary: PropTypes.bool,
  };
  