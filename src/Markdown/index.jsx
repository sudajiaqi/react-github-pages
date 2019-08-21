import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';

class Index extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <ReactMarkdown
          source={data}
          renderers={{ code: CodeBlock }}
          escapeHtml={false}
          skipHtml={false}
        />
      </div>
    );
  }
}

Index.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Index;
