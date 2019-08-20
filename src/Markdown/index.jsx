import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import * as axios from 'axios';
import history from '../history';
import gist from '../Utils';
import CodeBlock from './CodeBlock';

export default class MarkDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  componentDidMount() {
    const id = history.location.pathname.split('/')[2];
    gist.getGist(id).then(({ data }) => {
      axios.get(Object.values(data.files)[0].raw_url).then((data2) => {
        this.setState({ data: data2.data });
      });
    });
  }


  render() {
    return (
      <div>
        <ReactMarkdown
          source={this.state.data}
          renderers={{ code: CodeBlock }}
          escapeHtml={false}
          skipHtml={false}
        />
      </div>
    );
  }
}
