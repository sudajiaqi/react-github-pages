import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Item.css';

class Item extends React.Component {
  render() {
    const { gist } = this.props;
    const { description, files, id } = gist;
    console.log(files);
    return (
      <div className="gist-item">
        <div className="gist-title">
          <h2>{Object.keys(files)[0]}</h2>
          <Link to={`/gists/${id}`}>detail</Link>
        </div>
        <span>{description}</span>
      </div>
    );
  }
}

Item.propTypes = {
  gist: PropTypes.shape().isRequired,
};
export default Item;
