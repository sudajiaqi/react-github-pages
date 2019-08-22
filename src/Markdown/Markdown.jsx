import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import './Markdown.css';

const Markdown = (props) => {
  const { data } = props;
  return (
    <div className="markdown">
      <ReactMarkdown
        source={data}
        renderers={{ code: CodeBlock }}
        escapeHtml={false}
        skipHtml={false}
      />
    </div>
  );
};

Markdown.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Markdown;
