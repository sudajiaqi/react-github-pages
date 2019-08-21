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
      this.getFile(gist);
      return;
    }
    const id = history.location.pathname.split('/')[2];
    Gist.getGist(id)
      .then(({ data }) => {
        context.setGist(data);
        this.getFile(data);
      });
  }

  getFile = (gist) => {
    axios.get(Object.values(gist.files)[0].raw_url)
      .then(({ data }) => {
        this.setState({ data });
      });
  };

  render() {
    const { data } = this.state;
    const { component: Component, componentProps } = this.props;

    return data.length > 0 && (
      <div>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...componentProps} data={data} />
      </div>
    );
  }
}

Wrapper.propTypes = {
  context: PropTypes.shape().isRequired,
  component: PropTypes.func.isRequired,
  componentProps: PropTypes.shape().isRequired,
};

const WrapperConsumer = consumer(Wrapper);

const GistItem = (Component) => (props) => (
  <WrapperConsumer component={Component} componentProps={props} />);


export default GistItem;
