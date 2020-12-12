import React from 'react';
import PropTypes from 'prop-types';
import './input.css';


export const Input = ({ customClass, value, hasIcon,pattern, isEmailValid, confirmPasswordError, name,maxlength, type, placeholder, icon, isTouched, isDirty,isDisabled, isValid, ...props }) => {
  const mode = type ? 'bm-input--' + type : '';
  const icontype = icon ? 'input-icon--' + icon : '';
  const touched = isTouched ? 'input-touched' : '';
  const dirty = isDirty ? 'input-dirty' : '';
  const valid = isValid ? 'input-valid' : '';
  const validemail = isEmailValid ? 'input-valid' : '';
  const isInputDisabled = isDisabled ? true : false;
  const labelname = name.replaceAll("_", " ");
  const InputHasIcon = hasIcon? 'has-icon' : 'no-icon';
  if(maxlength == '' || maxlength == undefined){
    maxlength = 200;
  }

  var inputIcon = ''
  if (icontype == 'input-icon--pin') {
    inputIcon = <div className="input-icon--pin input-icon"></div>
  }
  else if (icontype == 'input-icon--person') {
    inputIcon = <div className="input-icon input-icon--person"></div>
  }
  else if (icontype == 'input-icon--password') {
    inputIcon = <div className="input-icon input-icon--password"></div>
  }
  else if (icontype == 'input-icon--email') {
    inputIcon = <div className="input-icon input-icon--email"></div>
  }
  else {
    inputIcon = '';
  }


  if (type == 'text'  ) {
  if (value) 
    {
      if (value != 'undefined' )
      {
      if(value.length <= maxlength) 
     {

      return (
                <React.Fragment>
                  <div className="bm-input--wrapper">
                    {inputIcon}
                    <input name={name} value={value}
                      type={type} placeholder={placeholder} disabled={isInputDisabled}
                      className={['bm-input', customClass, touched, dirty, InputHasIcon, mode, valid].join(' ')}
                      {...props}
                    />
                    <div className="bm-input--state"></div>
                  </div>
                </React.Fragment>
               ); 
    } 
  else if( value.length  > maxlength) 
         {
          return (
          <React.Fragment>
            <div className="bm-input--wrapper">
              {inputIcon}
              <input name={name} value={value}
                type={type}  placeholder={placeholder} maxLength ={maxlength} disabled={isInputDisabled}
                className={['bm-input', customClass, touched,dirty,InputHasIcon, mode].join(' ')}
                {...props}
              />
              <div className="bm-input--state"></div>
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
              {inputIcon}
              <input name={name} value={value}
                type={type} placeholder={placeholder} disabled={isInputDisabled}
                className={['bm-input', customClass, touched, dirty, valid, InputHasIcon, mode].join(' ')}
                {...props}
              />
              <div className="bm-input--state"></div>
            </div>
          </React.Fragment>
        );
      }
      if (isDirty && !isTouched) {
        return (
          <React.Fragment>
            <div className="bm-input--wrapper">
              {inputIcon}
              <input name={name} value={value}
                type={type} placeholder={placeholder} disabled={isInputDisabled}
                className={['bm-input', customClass, touched, dirty, valid, InputHasIcon, mode].join(' ')}
                {...props}
              />
              <div className="bm-input--state"></div>
              <span className={'input-error dirty-text'}>{labelname} is required</span>
            </div>
          </React.Fragment>
        );
      }
      else if (isTouched && isDirty) {
       
          return (
            <React.Fragment>
              <div className="bm-input--wrapper">
                {inputIcon}
                <input name={name} value={value}
                  type={type} placeholder={placeholder} disabled={isInputDisabled}
                  className={['bm-input', customClass, touched, dirty, valid, InputHasIcon, mode].join(' ')}
                  {...props}
                />
                <div className="bm-input--state"></div>
                <span className={'input-error dirty-text'}>{labelname} is required</span>
              </div>
            </React.Fragment>
          );
        
        
      }
      else {
        return (
          <React.Fragment>
            <div className="bm-input--wrapper">
              {inputIcon}
              <input name={name} value={value}
                type={type} placeholder={placeholder} disabled={isInputDisabled}
                className={['bm-input', customClass, touched, dirty, valid, InputHasIcon, mode].join(' ')}
                {...props}
              />
              <div className="bm-input--state"></div>
            </div>
          </React.Fragment>

        );
      }
    }
  } 

  else if (type == 'email') {

    if (value) {
      if (value != 'undefined') {

        if (isTouched && !isDirty) {
          if (validemail) {
            return (
              <React.Fragment>
                <div className="bm-input--wrapper">
                  {inputIcon}
                  <input name={name} value={value}
                    type={type} placeholder={placeholder} disabled={isInputDisabled}
                    className={['bm-input', customClass, touched, dirty, validemail, InputHasIcon, mode, isEmailValid].join(' ')}
                    {...props}
                  />
                  <div className="bm-input--state"></div>
                </div>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment>
                <div className="bm-input--wrapper">
                  {inputIcon}
                  <input name={name} value={value}
                    type={type} placeholder={placeholder} disabled={isInputDisabled}
                    className={['bm-input', customClass, touched, dirty, validemail, InputHasIcon, mode, isEmailValid].join(' ')}
                    {...props}
                  />
                  <div className="bm-input--state"></div>
                  <span className={'input-error dirty-text'}>{labelname} is not valid</span>
                </div>
              </React.Fragment>
            );
          }

        }
        if (isDirty && !isTouched) {
          return (
            <React.Fragment>
              <div className="bm-input--wrapper">
                {inputIcon}
                <input name={name} value={value}
                  type={type} placeholder={placeholder} disabled={isInputDisabled}
                  className={['bm-input', customClass, touched, dirty, valid, InputHasIcon, mode].join(' ')}
                  {...props}
                />
                <div className="bm-input--state"></div>
                <span className={'input-error dirty-text'}>{labelname} is required</span>
              </div>
            </React.Fragment>
          );
        }
        else if (isTouched && isDirty) {
          return (
            <React.Fragment>
              <div className="bm-input--wrapper">
                {inputIcon}
                <input name={name} value={value}
                  type={type} placeholder={placeholder} disabled={isInputDisabled}
                  className={['bm-input', customClass, touched, dirty, valid, InputHasIcon, mode].join(' ')}
                  {...props}
                />
                <div className="bm-input--state"></div>
                <span className={'input-error dirty-text'}>{labelname} is required</span>
              </div>
            </React.Fragment>
          );
        }
        else {
          return (
            <React.Fragment>
              <div className="bm-input--wrapper">
                {inputIcon}
                <input name={name} value={value}
                  type={type} placeholder={placeholder} disabled={isInputDisabled}
                  className={['bm-input', customClass, touched, dirty, valid, InputHasIcon, mode].join(' ')}
                  {...props}
                />
                <div className="bm-input--state"></div>
              </div>
            </React.Fragment>
          );
        }
      }
    }
    else {
      if (isDirty) {
        return (
          <React.Fragment>
            <div className="bm-input--wrapper">
              {inputIcon}
              <input name={name} value={value}
                type={type} placeholder={placeholder} disabled={isInputDisabled}
                className={['bm-input', customClass, touched, dirty, valid, InputHasIcon, mode].join(' ')}
                {...props}
              />
              <div className="bm-input--state"></div>
              <span className={'input-error dirty-text'}>{labelname} is required</span>
            </div>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            <div className="bm-input--wrapper">
              {inputIcon}
              <input name={name} value={value}
                type={type} placeholder={placeholder} disabled={isInputDisabled}
                className={['bm-input', customClass, touched, dirty, valid, InputHasIcon, mode].join(' ')}
                {...props}
              />
              <div className="bm-input--state"></div>
            </div>
          </React.Fragment>
        );
      }
    }

  }
  else if (type == 'password') {
    if (value) {
      if (value != 'undefined') {

        if (value.length <= 5) {
          return (
            <React.Fragment>
              <div className="bm-input--wrapper">
                {inputIcon}
                <input name={name} value={value}
                  type={type} placeholder={placeholder} disabled={isInputDisabled}
                  className={['bm-input input-dirty', customClass, touched, valid, InputHasIcon, mode].join(' ')}
                  {...props}
                />
                <div className="bm-input--state"></div>
                <span className={'input-error dirty-text'}>{labelname} should be of minimum 6 characters.</span>
              </div>
            </React.Fragment>
          );
        }
        else {
          if (confirmPasswordError === true) {
            return (
              <React.Fragment>
                <div className="bm-input--wrapper">
                  {inputIcon}
                  <input name={name} value={value}
                    type={type} placeholder={placeholder} disabled={isInputDisabled}
                    className={['bm-input input-dirty', customClass, touched, valid, InputHasIcon, mode].join(' ')}
                    {...props}
                  />
                  <div className="bm-input--state"></div>
                  <span className={'input-error dirty-text'}>{labelname} should match password.</span>
                </div>
              </React.Fragment>
            );
          }
          else {
            return (
              <React.Fragment>
                <div className="bm-input--wrapper">
                  {inputIcon}
                  <input name={name} value={value}
                    type={type} placeholder={placeholder} disabled={isInputDisabled}
                    className={['bm-input', customClass, touched, dirty, valid, InputHasIcon, mode].join(' ')}
                    {...props}
                  />
                  <div className="bm-input--state"></div>
                </div>
              </React.Fragment>
            );
          }
        }
      }
    }
    else {
      if (isTouched && !isDirty) {
        return (
          <React.Fragment>
            <div className="bm-input--wrapper">
              {inputIcon}
              <input name={name} value={value}
                type={type} placeholder={placeholder} disabled={isInputDisabled}
                className={['bm-input', customClass, touched, valid, InputHasIcon, mode].join(' ')}
                {...props}
              />
              <div className="bm-input--state"></div>
            </div>
          </React.Fragment>
        );
      } else if (isDirty && !isTouched) {
        return (
          <React.Fragment>
            <div className="bm-input--wrapper">
              {inputIcon}
              <input name={name} value={value}
                type={type} placeholder={placeholder} disabled={isInputDisabled}
                className={['bm-input', customClass, touched, dirty, valid, InputHasIcon, mode].join(' ')}
                {...props}
              />
              <div className="bm-input--state"></div>
              <span className={'input-error dirty-text'}>{labelname} is required</span>
            </div>
          </React.Fragment>
        );
      }
      else if (isTouched && isDirty) {
        return (
          <React.Fragment>
            <div className="bm-input--wrapper">
              {inputIcon}
              <input name={name} value={value}
                type={type} placeholder={placeholder} disabled={isInputDisabled}
                className={['bm-input', customClass, touched, dirty, valid, InputHasIcon, mode].join(' ')}
                {...props}
              />
              <div className="bm-input--state"></div>
              <span className={'input-error dirty-text'}>{labelname} is required</span>
            </div>
          </React.Fragment>
        );
      }
      else {
        return (
          <React.Fragment>
            <div className="bm-input--wrapper">
              {inputIcon}
              <input name={name} value={value}
                type={type} placeholder={placeholder} disabled={isInputDisabled}
                className={['bm-input', customClass, touched, dirty, valid, InputHasIcon, mode].join(' ')}
                {...props}
              />
              <div className="bm-input--state"></div>
            </div>
          </React.Fragment>
        );
      }
    }
  }
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email']),
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.oneOf(['email', 'password', 'pin', 'person']),
  onChange: PropTypes.func,
  isTouched: PropTypes.bool,
  isDirty: PropTypes.bool,
  isValid: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isEmailValid: PropTypes.bool,
  confirmPasswordError: PropTypes.bool,
  hasIcon:PropTypes.bool,
  customClass: PropTypes.string
};

Input.defaultProps = {
  type: 'text',
  placeholder: null,
  icon: null,
  onChange: undefined,
  value: undefined,
  hasIcon:false
};
