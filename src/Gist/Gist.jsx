import React from 'react';
import PropTypes from 'prop-types';
import Index from '../Markdown/index';

const Gist = (props) => {
  const { title, description, content } = props;

  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      <Index data={content} />
    </div>
  );
};

Gist.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default Gist;
