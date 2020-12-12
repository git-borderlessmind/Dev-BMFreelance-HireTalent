import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

export const Card = ({ title, ...props }) => {

    return (
        <React.Fragment>
            <div className="bm-card">
                
                <h2 className="bm-card--title">{title}</h2>

                
                </div>
        </React.Fragment>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    tag: PropTypes.string,
    hasCorner: PropTypes.bool,
    padding: PropTypes.oneOf([20, 30, 40, 50])
};

Card.defaultProps = {
    title: 'Let’s get started!',
    tag: 'This will boost your profile by 15%',
    hasCorner: false,
    padding: 50,
};