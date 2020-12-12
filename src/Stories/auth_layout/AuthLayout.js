import React from 'react';
import PropTypes from 'prop-types';
import './authLayout.css';
import { Logo } from '../logo/Logo';
import { Artwork } from '../artwork/artwork';

export const AuthLayout = ({ title, ...props }) => {

    return (
        <React.Fragment>
            <div className="bm-auth--layout">
                <div className={['col', 'left_col'].join(' ')}>
                    <Logo />
                    <Artwork/>
                </div>
                <div className={['col', 'right_col'].join(' ')}>


                </div>
            </div>
        </React.Fragment>
    );
}

AuthLayout.propTypes = {
    title: PropTypes.string,
};

AuthLayout.defaultProps = {

};