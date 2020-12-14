import React, { Component } from 'react'
import Select from 'react-select'
import './select.css';

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        width: '100%',
        color: state.isSelected ? '#fff' : (state.isFocused ? '#ffffff' : '#1C94D2'),
        backgroundColor: state.isSelected ? '#1C94D2' : (state.isFocused ? '#1C94D2' : '#FBFBFB'),

    }),
    control: (provided, state) => ({
        ...provided,
        width: '100%',
        borderColor: '#D6E4EC',
        color: '#343C44',
    }),
    singleValue: (provided, state) => ({
        ...provided,
        width: '100%',
        borderColor: '#D6E4EC',
        color: '#343C44',
    }),
}

export const BmSelect = ({ name, placeholder, onInputChange, isDirty, isDisabled, onChange, defaultValue, options, ...props }) => {
    const isInputDisabled = isDisabled=="true" ? true : false;
    if(isInputDisabled){
        <React.Fragment>
            <Select className="bm_select" defaultValue={defaultValue} menuColor="#1C94D2"
                styles={customStyles}
                placeholder={placeholder}
                name={name}
                options={options}
                onInputChange={onInputChange}
                disabled="disabled" />
        </React.Fragment>
    } else{
        if (isDirty) {
            <React.Fragment>
                <Select className="bm_select" defaultValue={defaultValue} menuColor="#1C94D2"
                    styles={customStyles}
                    name={name}
                    options={options}
                    onInputChange={onInputChange} />
                <span>1</span>
            </React.Fragment>
        }
        else {
            return (
                <React.Fragment>
                    <Select className="bm_select" defaultValue={defaultValue} menuColor="#1C94D2"
                        styles={customStyles}
                        placeholder={placeholder}
                        name={name}
                        options={options}
                        onInputChange={onInputChange} />
                    <span>test2</span>
                </React.Fragment>
            );
        }
    }
}
