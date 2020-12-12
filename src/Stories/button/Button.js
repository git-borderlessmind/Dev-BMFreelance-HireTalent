import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, customClass, backgroundColor, fab, color, borderColor, size, label, type, fill, raised, loader, ...props }) => {
  const mode = primary ? 'bm-button--primary' : 'bm-button--secondary';
  const fillType = fill ? '' : 'bm-button--outlined';
  const isRaised = raised ? 'bm-button--raised':'';
  const isFab = fab? 'bm-button--fab' : '';
  return (
    <button
      type={type}
      className={['bm-button', `bm-button--${size}`, mode, fillType, isRaised, isFab, customClass].join(' ')}
      style={{backgroundColor, borderColor, color }}
      {...props}
    >
      <span>{label}</span> {loader && <span className="spinner-border spinner-border-sm mr-1"></span>}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  fill: PropTypes.bool,
  raised: PropTypes.bool,
  backgroundColor: PropTypes.string,
  borderColor:PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  type:PropTypes.oneOf(['button', 'submit']),
  onClick: PropTypes.func,
  loader: PropTypes.bool,
  fab:PropTypes.bool,
  customClass: PropTypes.string
};

Button.defaultProps = {
  backgroundColor: null,
  borderColor:null,
  fill:true,
  raised: false,
  primary: true,
  size: 'medium',
  type: 'button',
  onClick: undefined,
  fab:false
};
