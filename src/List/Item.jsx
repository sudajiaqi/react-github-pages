import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Item.css';
import Button from '../Button';
import { consumer } from '../Context';
import { visible } from '../Context/Authentication';

const AuthLink = visible(Link);

class Item extends React.Component {
  setGist = () => {
    const { context, gist } = this.props;
    context.setGist(gist);
  };

  render() {
    const { gist } = this.props;
    const { description, files, id } = gist;
    return (
      <div className="gist-item">
        <div className="gist-title">
          <Link to={`/gists/${id}`} onClick={this.setGist}><h3>{Object.keys(files)[0]}</h3></Link>
          <AuthLink to={`/gists/${id}/edit`} onClick={this.setGist}>
            <Button onClick={this.setGist}>Edit</Button>
          </AuthLink>
        </div>
        <span>{description}</span>
      </div>
    );
  }
}

Item.propTypes = {
  gist: PropTypes.shape().isRequired,
  context: PropTypes.shape().isRequired,
};
export default consumer(Item);
