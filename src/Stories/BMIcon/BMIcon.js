import React from 'react';
import PropTypes from 'prop-types';
import person from '../assets/person.svg';
import settings from '../assets/settings.svg';
import logout from '../assets/logout.svg';
import changePassword from '../assets/change_password.svg';

export const BMIcon = ({ label, ...props }) => {

    if (label == 'person') {
        return (
            <img src={person} alt="" />
        );
    } else if (label == 'settings') {
        return (
            <img src={settings} alt="" />
        )
    }
    else if (label == 'logout') {
        return (
            <img src={logout} alt="" />
        )
    }
    else if (label == 'changePassword') {
        return (
            <img src={changePassword} alt="" />
        )
    }
    else {
        return (
            <img src={person} alt="" />
        );
    }
};

BMIcon.propTypes = {
    label: PropTypes.oneOf(['person', 'settings', 'logout', 'changePassword']),
};

