/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import './Textarea.css';

const Textarea = React.forwardRef((props, ref) => {
  const {
    onChange, onSelect, value, className,
  } = props;
  return (
    <div className={`textarea-wrapper ${className}`}>
      <pre className="textarea-content">{value}</pre>
      <textarea
        {...props}
        value={value}
        ref={ref}
        onChange={(event) => onChange(event.target.value)}
        onSelect={onSelect}
        placeholder="Please enter text here..."
      />
    </div>
  );
});

Textarea.defaultProps = {
  value: '',
  className: '',
  onChange: () => {
  },
  onSelect: () => {
  },
};

Textarea.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
};

export default Textarea;
