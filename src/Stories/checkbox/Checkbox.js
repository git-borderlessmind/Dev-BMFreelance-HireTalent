import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';


export const Checkbox = ({ value, name, id, label, onChange, indeterminate, isCircular, 
    wrapperClassName, inputRef, title = '', ...props }) => {
    const customId = id ? id : props.name;
    const labelClasses = 'bm-checkbox--label';
    const innerLabelClasses = 'bm-visually--hidden';
    const Circular = isCircular ? 'circular': '';

    return (
        <React.Fragment>
        <label htmlFor={customId} className={labelClasses} title={title || null}>
            <input  name={name} value={value} type="checkbox"
                onChange={(evt) => {
                    onChange(evt, customId, evt);
                }}
                className="bm-checkbox"
                ref={(el) => {
                    if (el) {
                        el.indeterminate = indeterminate;
                    }
                    if (typeof inputRef === 'function') {
                        inputRef(el);
                    } else if (Object(inputRef) === inputRef) {
                        inputRef.current = el;
                    }
                }}
            />
                <div className={['checkmark', Circular].join(' ')}></div>
                <span className={innerLabelClasses}>{label}</span>
            </label>
        </React.Fragment>
    );
}


Checkbox.propTypes = {
    name: PropTypes.string,
    value: PropTypes.bool,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    indeterminate: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func,
    title: PropTypes.string,
    isCircular:PropTypes.bool,
};

Checkbox.defaultProps = {
    onChange: () => {},
    indeterminate: false,
    label:'checkbox',
};
