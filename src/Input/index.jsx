import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = (props) => {
  const { onChange, value, className } = props;
  return (
    <input className={`input ${className}`} value={value} onChange={(event) => onChange(event.target.value)} />
  );
};
Input.defaultProps = {
  className: '',
};

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
