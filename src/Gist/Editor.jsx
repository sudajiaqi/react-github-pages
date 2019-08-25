import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MarkdownEditor } from '../Markdown';
import Input from '../Input';
import './Editor.css';
import Textarea from '../Textarea';
import Button from '../Button';
import history from '../history';
import gistActions from '../Utils';
import { consumer } from '../Context';

class Editor extends Component {
  constructor(props) {
    super(props);
    const { title, description, content } = this.props;
    this.state = {
      title,
      description,
      content,
    };
  }

  setDesc = (description) => {
    this.setState({ description });
  };

  setTitle = (title) => {
    this.setState({ title });
  };

  setContent = (content) => {
    this.setState({ content });
  };

  handleSave = () => {
    const { content, title, description } = this.state;
    const { id } = this.props;
    gistActions.updateGist(id, title, description, content).then(({ data }) => {
      const { context } = this.props;
      const newGist = {
        ...data,
        title,
        content,
      };
      context.setGist(newGist);
      history.push(`/gists/${data.id}`);
    });
  };

  render() {
    const { title, description, content } = this.state;

    return (
      <div>
        <h3>Title :</h3>
        <Input className="gist-title-input" value={title} onChange={this.setTitle} />
        <Button onClick={this.handleSave}>Save</Button>
        <div>
          <h3>Description :</h3>
          <Textarea value={description} onChange={this.setDesc} />
        </div>

        <MarkdownEditor className="gist-markdown-edit" data={content} onChange={this.setContent} />
      </div>
    );
  }
}

Editor.defaultProps = {
  title: '',
  description: '',
  content: '',
  id: null,
};
Editor.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string,
  context: PropTypes.shape().isRequired,
};
export default consumer(Editor);
