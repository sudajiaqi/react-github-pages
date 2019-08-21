import React from 'react';
import PropTypes from 'prop-types';
import * as axios from 'axios';
import history from '../history';
import { consumer } from '../Context';
import Gist from '../Utils';

class Wrapper extends React.Component {
  state = {
    data: '',
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
    Gist.getGist(id)
      .then(({ data }) => {
        this.getFile(data);
      });
  }

  getFile = (gist) => {
    axios.get(Object.values(gist.files)[0].raw_url)
      .then(({ data }) => {
        const { context } = this.props;
        const title = Object.keys(gist.files)[0];
        context.setGist({ ...gist, title, content: data });
        this.setState({ data });
      });
  };

  render() {
    const { data } = this.state;
    const { children } = this.props;

    return data.length > 0 && (
      <div>
        {children}
      </div>
    );
  }
}

Wrapper.propTypes = {
  context: PropTypes.shape().isRequired,
  children: PropTypes.node.isRequired,
};

const WrapperConsumer = consumer(Wrapper);


export default WrapperConsumer;
