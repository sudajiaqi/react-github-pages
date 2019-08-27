import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Switch } from 'react-router-dom';

const MySwitch = (props) => {
  const { children } = props;
  return (
    <Switch>
      {children}
      <Redirect to="/error" />
    </Switch>
  );
};

MySwitch.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MySwitch;
