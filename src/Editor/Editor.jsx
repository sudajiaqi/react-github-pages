import * as React from 'react';
import PropTypes from 'prop-types';
import ReactMde from 'react-mde';
import Showdown from 'showdown';
import 'react-mde/lib/styles/css/react-mde-all.css';
import './Editor.css';
import * as icons from './Icon';


const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

const Editor = (props) => {
  const { data } = props;
  const [value, setValue] = React.useState(data);
  const [selectedTab, setSelectedTab] = React.useState('write');
  return (
    <div className="container">
      {/*<ReactMde*/}
      {/*value={value}*/}
      {/*onChange={setValue}*/}
      {/*selectedTab={selectedTab}*/}
      {/*onTabChange={setSelectedTab}*/}
      {/*generateMarkdownPreview={(markdown) => Promise.resolve(converter.makeHtml(markdown))}*/}
      {/*/>*/}
      <div className="editor-bar">
        <div>Write</div>
        <div>Preview</div>
        <img className="image" src={icons.unorderedList} />
        <img className="image" src={icons.strikethrough} />
        <img className="image" src={icons.queue} />
        <img className="image" src={icons.orderedList} />
        <img className="image" src={icons.link} />
        <img className="image" src={icons.italic} />
        <img className="image" src={icons.image} />
        <img className="image" src={icons.ckeckList} />
        <img className="image" src={icons.header} />
        <img className="image" src={icons.bold} />
      </div>
      <div className="textarea-wrapper">
        <pre className="textarea-content">{value}</pre>
        <textarea
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="请在此处输入文字..."
        >
        </textarea>
      </div>
    </div>
  );
};

Editor.propTypes = {
  data: PropTypes.string.isRequired,
};
export default Editor;
