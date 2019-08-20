import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends React.PureComponent {
  render() {
    const { children, className, disabled, onClick } = this.props;
    return (
      <button type="button" disabled={disabled} onClick={onClick} className={`button ${className}`}>
        {children}
      </button>
    );
  }
}

Button.defaultProps = {
  className: '',
  disabled: false,
};

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;