import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = (props) => {
  const { onChanged, value, className } = props;
  return (
    <input className={`input ${className}`} value={value} onChange={(event) => onChanged(event.target.value)} />
  );
};
Input.defaultProps = {
  className: '',
};

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChanged: PropTypes.func.isRequired,
};

export default Input;
