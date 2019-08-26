import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Index = (props) => {
  const node = useRef();

  const { onOutsideClick, children } = props;
  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    onOutsideClick(e);
  };
  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClickOutside);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
  return (
    <div ref={node}>
      {children}
    </div>
  );
};

Index.propTypes = {
  children: PropTypes.node.isRequired,
  onOutsideClick: PropTypes.func.isRequired,
};

export default Index;
