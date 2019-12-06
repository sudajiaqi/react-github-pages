import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { visible } from '../Context/Authentication';
import Loading from '../Loading';
import renderComments from '../Gitment';

const Markdown = React.lazy(() => import('../Markdown'));

const AuthLink = visible(Link);

class Gist extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props;
    renderComments(id, this.ref.current);
  }

  render() {
    const {
      title, description, content, createdAt, updatedAt, id,
    } = this.props;

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
        <Suspense fallback={<Loading />}>
          <Markdown data={content} />
        </Suspense>
        <div ref={this.ref} />
      </div>
    );
  }
}

Gist.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default Gist;
