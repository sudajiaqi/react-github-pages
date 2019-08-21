import * as React from 'react';
import PropTypes from 'prop-types';
import ReactMde from 'react-mde';
import Showdown from 'showdown';
import 'react-mde/lib/styles/css/react-mde-all.css';
import './Editor.css';
import hoc from '../GistItemHOC';


const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

const Editor = (props) => {
  const { data } = props;
  console.log(data, 'test');
  const [value, setValue] = React.useState(data);
  const [selectedTab, setSelectedTab] = React.useState('write');
  return (
    <div className="container">
      <ReactMde
        value={value}
        onChange={setValue}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) => Promise.resolve(converter.makeHtml(markdown))}
      />
    </div>
  );
};

Editor.propTypes = {
  data: PropTypes.string.isRequired,
};
export default hoc(Editor);
