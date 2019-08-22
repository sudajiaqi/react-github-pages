/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import './Img.css';

const Img = (props) => {
  const {
    title, className, src,
  } = props;
  return (
    <img
      {...props}
      className={className}
      title={title}
      src={src}
      alt={title}
    />
  );
};

Img.defaultProps = {
  className: 'image',
  onClick: () => {
  },
};

Img.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Img;
