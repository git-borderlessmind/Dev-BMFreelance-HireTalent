import React from 'react';
import PropTypes from 'prop-types';
import './textarea.css';


export const Textarea = ({ value,hasIcon, isEmailValid, confirmPasswordError, name,maxlength, type, placeholder, icon, isTouched, isDirty, isDisabled, isValid, ...props }) => {
  const mode = type ? 'bm-input--' + type : '';
  const icontype = icon ? 'input-icon--' + icon : '';
  const touched = isTouched ? 'input-touched' : '';
  const dirty = isDirty ? 'input-dirty' : '';
  const valid = isValid ? 'input-valid' : '';
  // const validemail = isEmailValid ? 'input-valid' : '';
  const isInputDisabled = isDisabled ? true : false;
  const labelname = name.replaceAll("_", " ");
  const InputHasIcon = hasIcon? 'has-icon' : 'no-icon';
  if(maxlength == '' || maxlength == undefined){
    maxlength = 500;
  }
  
 
          if (value) {
             if (value != 'undefined') {
               if(value.length < maxlength) {
                 return (
                  <React.Fragment>
                    <div className="bm-input--wrapper">
                      {/* {inputIcon}  */}
                      <textarea rows="3"  name={name} value={value}
                        type={type} placeholder={placeholder} disabled={isInputDisabled}
                        className={['bm-input', touched, dirty, valid, InputHasIcon, mode].join(' ')}
                        {...props}
                      />
                    </div>
                  </React.Fragment>
                );
              }  else if( value.length >= maxlength)  {
                return (
                  <React.Fragment>
                    <div className="bm-input--wrapper">
                     {/* {inputIcon}  */}
                      <textarea rows="3" name={name} value={value}
                        type={type}  placeholder={placeholder} maxLength ={maxlength} disabled={isInputDisabled}
                        className={['bm-input', touched, mode].join(' ')}
                        {...props}
                      />
                       <span className={'input-error dirty-text'}>Maxlength of {labelname} is {maxlength}</span>
                    </div>
                  </React.Fragment>
                );
              }
            }
          }
            else {
              if (isTouched && !isDirty) {
                return (
                  <React.Fragment>
                    <div className="bm-input--wrapper">
                      {/* {inputIcon}  */}
                      <textarea rows="3" name={name} value={value}
                        type={type} placeholder={placeholder} disabled={isInputDisabled}
                        className={['bm-input', touched, dirty, valid, InputHasIcon, mode].join(' ')}
                        {...props}
                      />
                    </div>
                  </React.Fragment>
                );
              }
              if (isDirty && !isTouched) {
                return (
                  <React.Fragment>
                    <div className="bm-input--wrapper">
                      {/* {inputIcon}  */}
                      <textarea rows="3" name={name} value={value}
                        type={type} placeholder={placeholder} disabled={isInputDisabled}
                        className={['bm-input', touched, dirty, valid, InputHasIcon, mode].join(' ')}
                        {...props}
                      />
                      <span className={'input-error dirty-text'}>{labelname} is required</span>
                    </div>
                  </React.Fragment>
                );
              }
              else if (isTouched && isDirty) {
                return (
                  <React.Fragment>
                    <div className="bm-input--wrapper">
                     {/* {inputIcon}  */}
                      <textarea rows="3" name={name} value={value}
                        type={type} placeholder={placeholder} disabled={isInputDisabled}
                        className={['bm-input', touched, dirty, valid, InputHasIcon, mode].join(' ')}
                        {...props}
                      />
                      <span className={'input-error dirty-text'}>{labelname} is required</span>
                    </div>
                  </React.Fragment>
                );
              }
              else {
                return (
                  <React.Fragment>
                    <div className="bm-input--wrapper">
                      {/* {inputIcon}  */}
                      <textarea rows="3" name={name} value={value}
                        type={type} placeholder={placeholder} disabled={isInputDisabled}
                        className={['bm-input', touched, dirty, valid, InputHasIcon, mode].join(' ')}
                        {...props}
                      />
                    </div>
                  </React.Fragment>
        
                );
              }
            }
          

        // <React.Fragment>
        //     <textarea></textarea>
        // </React.Fragment>


}