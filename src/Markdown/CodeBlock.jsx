import React from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js';
import 'highlight.js/styles/darcula.css';

class CodeBlock extends React.PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
  }

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  setRef(el) {
    this.codeEl = el;
  }

  highlightCode() {
    console.log(this.codeEl);
    hljs.highlightBlock(this.codeEl);
  }

  render() {
    const { value, language } = this.props;
    return (
      <pre>
        <code ref={this.setRef} className={`language-${language} hljs`}>
          {value}
        </code>
      </pre>
    );
  }
}

CodeBlock.defaultProps = {
  language: '',
};

CodeBlock.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string,
};

export default CodeBlock;
