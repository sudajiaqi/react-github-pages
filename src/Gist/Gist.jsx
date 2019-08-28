import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { visible } from '../Context/Authentication';

const Markdown = React.lazy(() => import('../Markdown'));

const AuthLink = visible(Link);

const Gist = (props) => {
  const {
    title, description, content, createdAt, updatedAt, id,
  } = props;

  return (
    <div>
      <div className="gist-title">
        <h3>{title}</h3>
        <AuthLink to={`/gists/${id}/edit`}><h3><Button>Edit</Button></h3></AuthLink>
      </div>
      <p>
        <b>Created At: </b>
        {new Date(createdAt).toLocaleDateString()}
      </p>
      <p>
        <b>Updated At: </b>
        {new Date(updatedAt).toLocaleDateString()}
      </p>
      <h4>{description}</h4>
      <Suspense fallback={<div>Loading</div>}>
        <Markdown data={content} />
      </Suspense>
    </div>
  );
};

Gist.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default Gist;
