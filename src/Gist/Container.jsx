import React from 'react';
import PropTypes from 'prop-types';
import * as axios from 'axios';
import { Route } from 'react-router-dom';
import history from '../history';
import { consumer } from '../Context';
import gistActions from '../Utils';
import Gist from './Gist';
import Switch from '../Switch';
import Editor from './Editor';
import { visible } from '../Context/Authentication';

const AuthRoute = visible(Route);

class GistContainer extends React.Component {
  state = {
    data: {},
  };

  componentDidMount() {
    const { context } = this.props;
    const { gist } = context;
    if (gist) {
      if (gist.content) {
        return;
      }
      this.getFile(gist);
      return;
    }
    const id = history.location.pathname.split('/')[2];
    gistActions.getGist(id)
      .then(({ data }) => {
        this.getFile(data);
      });
  }

  getFile = (gist) => {
    axios.get(Object.values(gist.files)[0].raw_url)
      .then(({ data }) => {
        const { context } = this.props;
        const title = Object.keys(gist.files)[0];
        const newGist = {
          ...gist,
          title,
          content: data,
        };
        context.setGist(newGist);
        this.setState({ data: newGist });
      });
  };

  render() {
    const { data } = this.state;
    const { context } = this.props;
    const {
      title, description, content, updated_at: updatedAt, created_at: createdAt, id,
    } = context.gist || data;
    if (!data.content && !content) {
      return null;
    }

    return (
      <Switch>
        <Route exact path="/gists/:id">
          <Gist
            id={id}
            title={title}
            createdAt={createdAt}
            updatedAt={updatedAt}
            description={description}
            content={content}
          />
        </Route>
        <AuthRoute exact path="/gists/:id/edit">
          <Editor
            id={id}
            title={title}
            description={description}
            content={content}
          />
        </AuthRoute>
      </Switch>
    );
  }
}

GistContainer.propTypes = {
  context: PropTypes.shape().isRequired,
};

const WrapperConsumer = consumer(GistContainer);


export default WrapperConsumer;
