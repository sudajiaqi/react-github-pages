import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MarkdownEditor } from '../Markdown';
import Input from '../Input';
import './Editor.css';
import Textarea from '../Textarea';
import Button from '../Button';

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
    const { content } = this.state;
    console.log(content);

  };

  render() {
    const { title, description, content } = this.state;

    return (
      <div>
        <h3>Title :</h3>
        <Input className="gist-title-input" value={title} onChanged={this.setTitle} />
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
};
Editor.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string,
};
export default Editor;
