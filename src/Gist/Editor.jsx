import React from 'react';
import PropTypes from 'prop-types';
import Edit from '../Editor/Editor';

const Editor = (props) => {
  const { title, description, content } = props;
  console.log(props);

  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      <Edit data={content} />
    </div>
  );
};

Editor.defaultProps = {
  title: '',
  description: '',
  content: '',
};
Editor.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string,
};
export default Editor;
