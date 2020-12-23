import React from 'react';
import './commonPage.css';
import bmlogo from '../Stories/assets/bm-logo.svg';

import { PrivacyPolicy } from './PrivacyPolicy';
import { TemrsAndCondition } from './TermsAndCondition';
import { CookiePolicy } from './CookiePolicy';

export const CommonPage = ({ ...props }) => {


    var pageTitle;
    var pageContent;
    if (window.location.pathname === '/privacy-policy') {
        pageTitle = 'Privacy Policy';
        pageContent = <PrivacyPolicy />;
    } else if (window.location.pathname === '/terms-and-conditions') {
        pageTitle = 'Terms and Conditions';
        pageContent = <TemrsAndCondition />;
    } else {
        pageTitle = 'Cookie Policy';
        pageContent = <CookiePolicy />;
    }

    return (

        <React.Fragment>
            <header className="bm--onbarding-header">
                <div>
                    <a href="" className="bm-logo"><img src={bmlogo} /></a>
                </div>
            </header>
            <div className="commonpage_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="bm-card">
                                <div className="page_title">
                                    <h1>{pageTitle}</h1>
                                </div>
                                <div className="page_content">
                                    {pageContent}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}