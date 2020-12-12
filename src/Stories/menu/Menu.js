import React from 'react';
import PropTypes from 'prop-types';
import './menu.css';
import { Link } from 'react-router-dom';
import { BMIcon } from '../BMIcon/BMIcon';
/**
 * Primary UI component for user interaction
 */
export const Menu = ({ options, name, alignment, customButtonClass, menuLabel, ...props }) => {


    const menuOptions = options.map((option, index) => {
        if (option['linkType'].toLowerCase() == 'link') {
            return <li key={index}><Link to={option['linkTo']}><BMIcon label={option['customIcon']} /><span>{option['label']}</span></Link></li>
        } else if (option['linkType'].toLowerCase() == 'action') {
            return <li key={index}> <a onClick={option['clickEvent']}><BMIcon label={option['customIcon']} /><span>{option['label']}</span></a></li>
        }
    });

    function toggleMenu(e) {
        if (e.target.nextSibling) {
            var showorhide = '';
            if (e.target.nextSibling.classList.contains('bm-menu--show')) {
                showorhide = 'hide';
            } else {
                showorhide = 'show';
            }
        }

        var objs = document.getElementsByClassName('bm-menu--show');
        for (var i = 0; i < objs.length; i++) {
            objs[i].classList.remove("bm-menu--show");
        }
        if (e.target.nextSibling) {
            if (showorhide == 'show') {
                e.target.nextSibling.classList.add('bm-menu--show');
            }
            if (showorhide == 'hide') {
                e.target.nextSibling.classList.remove('bm-menu--show');
            }
            //e.target.nextSibling.classList.toggle('bm-menu--show');
        } else {
            //console.log(e.currentTarget.parentElement.nextSibling);
            e.currentTarget.parentElement.nextSibling.classList.toggle('bm-menu--show');
        }
    }

    function hideMenu(e) {
        e.target.classList.toggle('bm-menu--show');
    }

    if (alignment == 'left') {
        return (
            <React.Fragment>
                <div>
                    <button id={name} onClick={toggleMenu} className={'bm-menu--button', customButtonClass}>{menuLabel}</button>
                    <div className="bm-menu--wrapper" onClick={hideMenu}>
                        <div className="bm-menu--container">
                            <ul className="bm-menu--list" style={{
                                left: (document.getElementById(name)) ?
                                    (document.getElementById(name).getBoundingClientRect().x) : 0,
                                top: document.getElementById(name) ? (document.getElementById(name).getBoundingClientRect().y + document.getElementById(name).clientHeight) : 0
                            }}>
                                {menuOptions}
                            </ul>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
    else if (alignment == 'right') {

        return (
            <React.Fragment>
                <div>
                    <button id={name} onClick={toggleMenu} className={'bm-menu--button', customButtonClass}>{menuLabel}</button>
                    <div className="bm-menu--wrapper" onClick={hideMenu}>
                        <div className="bm-menu--container">
                            <ul className="bm-menu--list" style={{
                                right: (document.getElementById(name)) ?
                                    (window.outerWidth - (document.getElementById(name).getBoundingClientRect().x + document.getElementById(name).clientWidth) ) : 0,
                                top: document.getElementById(name) ? (document.getElementById(name).getBoundingClientRect().y + document.getElementById(name).clientHeight) : 0
                            }}>
                                {menuOptions}
                            </ul>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );

    } else {
        return (
            <React.Fragment>
                <div>
                    <button id={name} onClick={toggleMenu} className={'bm-menu--button', customButtonClass}>{menuLabel}</button>
                    <div className="bm-menu--wrapper" onClick={hideMenu}>
                        <div className="bm-menu--container">
                            <ul className="bm-menu--list" style={{
                                left: (document.getElementById(name)) ?
                                    (document.getElementById(name).getBoundingClientRect().x) : 0,
                                top: document.getElementById(name) ? (document.getElementById(name).getBoundingClientRect().y + document.getElementById(name).clientHeight) : 0
                            }}>
                                {menuOptions}
                            </ul>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }

};

Menu.propTypes = {
    options: PropTypes.array,
    menuLabel: PropTypes.string,
    name: PropTypes.string,
    customButtonClass: PropTypes.string,
    alignment: PropTypes.oneOf(['right', 'left'])
};

