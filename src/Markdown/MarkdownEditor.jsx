import React from 'react';
import PropTypes from 'prop-types';
import * as icons from './Icon';
import Img from './Img';
import Markdown from './Markdown';
import Textarea from '../Textarea';
import './MarkdownEditor.css';

const MODE = {
  WRITE: true,
  PREVIEW: false,
};


class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.textarea = React.forwardRef();
    this.state = {
      value: data,
      selectedTab: MODE.WRITE,
      selection: {
        start: 0,
        end: 0,
      },
    };
  }

  componentDidMount() {
    this.textarea.current.focus();
    this.textarea.current.selectionStart = 0;
    this.textarea.current.selectionEnd = 0;
  }

  componentDidUpdate(prevProps, prevState) {
    const { selection } = this.state;
    if (selection !== prevState.selection) {
      this.setSelectedText();
    }
  }

  setSelectedText = () => {
    const { selection } = this.state;
    const { start, end } = selection;
    if (this.textarea.current) {
      this.textarea.current.select();
      this.textarea.current.selectionStart = start;
      this.textarea.current.selectionEnd = end;
    }
  };


  setValue = (value) => this.setState({ value });

  handleTextChanged = (value) => {
    const { onChange } = this.props;
    this.setValue(value);
    onChange(value);
  };

  changeSelectedTab = () => this.setState(({ selectedTab }) => ({
    selectedTab: !selectedTab,
  }));

  setSelection = (start, end) => this.setState({
    selection: {
      start,
      end,
    },
  });

  moveSelection = (moveStart = 0, moveEnd = 0) => {
    this.setState(({ selection: { start, end } }) => ({
      selection: {
        start: start + moveStart,
        end: end + moveEnd,
      },
    }));
  };

  handleSelected = (event) => {
    const textarea = event.target;
    const start = textarea.selectionStart;
    // obtain the index of the last selected character
    const end = textarea.selectionEnd;
    this.setSelection(start, end);
  };

  getSelectedText = () => {
    const { value, selection } = this.state;
    const { start, end } = selection;
    return value.substring(start, end);
  };

  replaceText = (replacedText) => {
    const { value, selection } = this.state;
    const { start, end } = selection;
    const newText = value.substring(0, start) + replacedText + value.substring(end, value.length);
    this.setState({ value: newText });
  };

  handleBold = () => {
    this.replaceText(`**${this.getSelectedText()}**`);
    this.moveSelection(2, 2);
  };

  handleCode = () => {
    this.replaceText(`\`${this.getSelectedText()}\``);
    this.moveSelection(1, 1);
  };

  handleQueue = () => {
    this.replaceText(`>${this.getSelectedText()}`);
    this.moveSelection(1, 1);
  };

  handleStrikethrough = () => {
    this.replaceText(`~~${this.getSelectedText()}~~`);
    this.moveSelection(2, 2);
  };

  handleLink = () => {
    const selected = this.getSelectedText();
    this.replaceText(`[${selected}](url)`);
    this.moveSelection(selected.length + 3, 6);
  };

  handleItalic = () => {
    this.replaceText(`_${this.getSelectedText()}_`);
    this.moveSelection(1, 1);
  };

  handleHeader = () => {
    this.replaceText(`# ${this.getSelectedText()}`);
    this.moveSelection(2, 2);
  };

  handleImage = () => {
    const selected = this.getSelectedText();
    this.replaceText(`![${selected}](url)`);
    this.moveSelection(selected.length + 4, 7);
  };

  handleUnorderedList = () => {
    this.replaceText(`- ${this.getSelectedText()}`);
    this.moveSelection(2, 2);
  };

  handleOrderedList = () => {
    this.replaceText(`1. ${this.getSelectedText()}`);
    this.moveSelection(3, 3);
  };

  handleCheckedList = () => {
    this.replaceText(`- [x] ${this.getSelectedText()}`);
    this.moveSelection(6, 6);
  };

  render() {
    const { value, selectedTab } = this.state;
    const { className } = this.props;
    return (
      <div className={`container ${className}`}>
        <div className="editor-bar">
          {selectedTab === MODE.WRITE && (
            <div>
              <Img title="header" src={icons.header} onClick={this.handleHeader} />
              <Img title="bold" src={icons.bold} onClick={this.handleBold} />
              <Img title="italic" src={icons.italic} onClick={this.handleItalic} />
              <Img
                title="strikethrough"
                src={icons.strikethrough}
                onClick={this.handleStrikethrough}
              />
              <Img title="queue" src={icons.queue} onClick={this.handleQueue} />
              <Img title="code" src={icons.code} onClick={this.handleCode} />
              <Img title="link" src={icons.link} onClick={this.handleLink} />
              <Img title="image" src={icons.image} onClick={this.handleImage} />
              <Img
                title="unordered list"
                src={icons.unorderedList}
                onClick={this.handleUnorderedList}
              />
              <Img title="ordered list" src={icons.orderedList} onClick={this.handleOrderedList} />
              <Img title="checked list" src={icons.checkedList} onClick={this.handleCheckedList} />
            </div>
          )}
          <Img
            className="preview"
            title="preview"
            src={icons.preview}
            onClick={this.changeSelectedTab}
          />
        </div>

        {selectedTab === MODE.WRITE ? (
          <Textarea
            value={value}
            className="markdown-textarea"
            ref={this.textarea}
            onChange={this.handleTextChanged}
            onSelect={this.handleSelected}
          />
        ) : (
          <Markdown data={value} />
        )}
      </div>
    );
  }
}

MarkdownEditor.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default MarkdownEditor;
