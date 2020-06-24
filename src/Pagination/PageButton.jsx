import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const PageButton = (props) => {
  const {
    page, onClick, current,
  } = props;

  return (
    <Button
      onClick={onClick}
      className={`${current === page && 'is-active'} page-button`}
    >
      {page}
    </Button>
  );
};

PageButton.defaultProps = {
  current: null,
};

PageButton.propTypes = {
  page: PropTypes.number.isRequired,
  current: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

const DotButton = () => (
  <Button
    className="page-button"
    disabled
  >
    ...
  </Button>
);

PageButton.Dot = DotButton;

export default PageButton;
