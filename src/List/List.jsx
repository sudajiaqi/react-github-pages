import React from 'react';
import Item from './Item';
import Button from '../Button';
import './List.css';
import gist from '../Utils';
import history from '../history';
import query from './query';

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
    return (
      <div className="gist-list">
        <h4>Blog List</h4>
        <hr />
        {gists.map((item) => (
          <Item key={item.url} gist={item} />
        ))}
        <div className="gist-page-btn">
          <Button
            disabled={page <= 1}
            onClick={() => this.getGistsByPage(page - 1)}
          >
            Prev
          </Button>
          <Button
            disabled={gists.length <= 0}
            onClick={() => this.getGistsByPage(page + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }
}

export default List;
