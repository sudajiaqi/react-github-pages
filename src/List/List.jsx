import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Item from './Item';
import Button from '../Button';
import './List.css';
import gist from '../Utils';
import history from '../history';
import query from './query';
import Pagination from '../Pagination';
import { consumer } from '../Context';
import { visible } from '../Context/Authentication';
import { PAGE_SIZE } from '../Constants';

const AuthLink = visible(Link);

class List extends React.Component {
  state = {
    gists: [],
    page: 1,
  };

  componentDidMount() {
    const { page } = query.parse(history.location.search);
    this.getGistsByPage(page);
  }

  getGistsByPage = (page = 1) => {
    const { pathname } = history.location;
    history.push(pathname.concat('?') + query.stringify({ page }));
    gist.getGists(page)
      .then(({ data }) => {
        this.setState({
          gists: data,
          page,
        });
      });
  };

  render() {
    const { gists, page } = this.state;
    const { context } = this.props;

    return (
      <>
        <div className="gist-list-title">
          <h4>Blog List</h4>
          <AuthLink to="/gists/new"><Button>+ New Blog</Button></AuthLink>
        </div>

        {gists.map((item) => (
          <Item key={item.url} gist={item} />
        ))}

        <Pagination
          onClick={this.getGistsByPage}
          page={page}
          total={Math.ceil(context.gists / PAGE_SIZE)}
        />
      </>
    );
  }
}

List.propTypes = {
  context: PropTypes.shape().isRequired,
};

export default consumer(List);
